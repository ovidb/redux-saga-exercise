import beers from './beers'
import { RECEIVE_BEERS, FETCHING_BEERS } from '../actions'

describe('#Reducer: Beers', () => {
  it('Returns default state', () => {
    expect(beers(undefined, { type: 'default_action' })).toEqual({ data: [], isFetching: false })
  })
  it('Returns state', () => {
      //TODO implement test
  })
  it(`When action ${RECEIVE_BEERS} returns state`, () => {
    //TODO implement test
  })
  it(`When action ${FETCHING_BEERS} returns state`, () => {
    //TODO implement test
})
