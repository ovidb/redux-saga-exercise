import { receiveBeers, RECEIVE_BEERS } from './'


it(`Returns an Action type ${RECEIVE_BEERS}`, () => {
  const beers = {
    "data": [],
    "isFetching": false
  }
  expect(receiveBeers(beers)).toEqual({
    type: RECEIVE_BEERS,
    beers
  })
})
