import { isFetchingBeers } from './'
import { settings } from './'

it('should return state.beers.isFetching', () => {
  expect(
    isFetchingBeers(
      {
      beers: {
        isFetching: true
      }
    }
  )
  ).toBeTruthy()
})

//TODO implement remaining test for settings selector
