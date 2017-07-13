import {
  receiveSession,
  fetchingBeers,
  receiveBeers,
  setCurrentBeerIndex,
  fetchBeers,
  startSession,
  RECEIVE_SESSION,
  FETCHING_BEERS,
  RECEIVE_BEERS,
  CURRENT_BEER_INDEX,
  FETCH_BEERS,
  START_SESSION
} from './'

it(`Returns an Action type ${RECEIVE_SESSION}`, () => {
  const session = {
    "id": "reactJSacademy"
  }
  expect(receiveSession(session)).toMatchSnapshot()
})

it(`Returns an Action type ${FETCHING_BEERS}`, () => {
  const isFetching = {
    isFetching: true
  }
  expect(fetchingBeers(isFetching)).toMatchSnapshot()
})

it(`Returns an Action type ${RECEIVE_BEERS}`, () => {
  const beers = {
    data: [],
    isFetching: false
  }
  expect(receiveBeers(beers)).toMatchSnapshot()
})

it(`Returns an Action type ${CURRENT_BEER_INDEX}`, () => {
  const currentIndex = 1
  expect(setCurrentBeerIndex(currentIndex)).toMatchSnapshot()
})

it(`Returns an Action type ${FETCH_BEERS}`, () => {
  expect(fetchBeers()).toMatchSnapshot()
})

it(`Returns an Action type ${START_SESSION}`, () => {
  expect(startSession()).toMatchSnapshot()
})
