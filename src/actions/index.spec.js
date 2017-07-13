import {
  receiveSession,
  fetchingBeers,
  RECEIVE_SESSION,
  FETCHING_BEERS
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
