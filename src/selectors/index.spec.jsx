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

it('should return state.settings', () => {
  expect(
    settings(
      {
        settings: {
          session: {}
        }
      }
    )
  ).toEqual({session: {}})
})
