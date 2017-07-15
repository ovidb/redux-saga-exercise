import beers from './beers'
import { RECEIVE_BEERS, FETCHING_BEERS, receiveBeers, fetchingBeers } from '../actions'

describe('#Reducer: Beers', () => {
  it('Returns default state', () => {
    expect(beers(undefined, { type: 'default_action' })).toEqual({ data: [], isFetching: false })
  })
  it('Returns state', () => {
    expect(beers({ data: ["data"], isFetching: false }, { type: 'another_action'})).toEqual({ data: ["data"], isFetching: false })
  })
  it(`When action ${RECEIVE_BEERS} returns state`, () => {
    expect(beers({ data: ["data"], isFetching: false }, receiveBeers(["my beer"]) )).toEqual({
      data: ["data", "my beer"],
      isFetching: false
    })
  })
  it(`When action ${FETCHING_BEERS} returns state`, () => {
    expect(beers({ data: ["data"], isFetching: false }, fetchingBeers(true))).toEqual({
      data: ["data"],
      isFetching: true
    })
  })
})
