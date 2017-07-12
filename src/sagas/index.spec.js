import { call, put, select } from 'redux-saga/effects'
import { getBeers, startSession as apiStartSession } from '../api'
import { fetchingBeers, receiveSession, FETCHING_BEERS, RECEIVE_BEERS } from '../actions'
import { fetchBeers, startSession } from './'
import { isFetchingBeers, settings as settingsSelector } from '../selectors'

describe('#Saga: startSession', () => {
  it('should start a session', () => {
    const session = { session: 1 }
    const startSessionGenerator = startSession()

    const callApiStartSession = startSessionGenerator.next()
    expect(callApiStartSession.value).toEqual(call(apiStartSession))

    const putStartSession = startSessionGenerator.next(session)
    expect(putStartSession.value).toEqual(put(receiveSession(session)))
  })
})

describe('#Saga: fetchBeers', () => {
  it('should fetch beers if it is not already fetching', () => {
    const fetchBeersGenerator = fetchBeers()

    const selectIsFetching = fetchBeersGenerator.next()
    expect(selectIsFetching.value).toEqual(select(isFetchingBeers))

    const putFetchingBeers = fetchBeersGenerator.next(false)
    expect(putFetchingBeers.value).toEqual(put(fetchingBeers(true)))

    const settings = {
      session: {
        id: 1
      }
    }
    const selectSettings = fetchBeersGenerator.next(true)
    expect(selectSettings.value).toEqual(select(settingsSelector))

    const callApiGetBeers = fetchBeersGenerator.next(settings)
    expect(callApiGetBeers.value).toEqual(call(getBeers, settings.session.id))

    const beers = []
    let action = fetchBeersGenerator.next(beers)
    expect(action.value).toEqual(put({ type: RECEIVE_BEERS, beers }))

    action = fetchBeersGenerator.next()
    expect(action.value).toEqual(put({ type: FETCHING_BEERS, isFetching: false }))
  })

  it('should NOT fetch beers if it is already fetching beers', () => {
    const fetchBeersGenerator = fetchBeers()
    const selectIsFetching = fetchBeersGenerator.next()
    expect(selectIsFetching.value).toEqual(select(isFetchingBeers))

    const yieldedOutput = fetchBeersGenerator.next(true)
    expect(yieldedOutput.done).toEqual(true)
  })
})
