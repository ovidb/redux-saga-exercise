import configureStore from './configureStore.dev.js'

describe('Store', () => {
  it('gets default State with initialState', () => {
    const store = configureStore()

    expect(store.getState()).toEqual({
      "beer": {
        "currentIndex": 0
      },
      "beers": {
        "data": [],
        "isFetching": false
      },
      "settings": {
        "session": {}
      }
    })
  })

  it('The store should contain the runSaga function', () => {
    const store = configureStore()
    // Your test here
  })
})
