// @flow
export const CURRENT_BEER_INDEX = 'CURRENT_BEER_INDEX'
export const FETCH_BEERS = 'FETCH_BEERS'
export const FETCHING_BEERS = 'FETCHING_BEERS'
export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const RECEIVE_SESSION = 'RECEIVE_SESSION'
export const START_SESSION = 'START_SESSION'


export const receiveSession = (session) => ({
  type: RECEIVE_SESSION,
  session
})

export const fetchingBeers = (isFetching) => ({
  type: FETCHING_BEERS,
  isFetching
})

export const receiveBeers = (beers) => ({
  type: RECEIVE_BEERS,
  beers
})

export const setCurrentBeerIndex = (currentIndex) => ({
  type: CURRENT_BEER_INDEX,
  currentIndex
})

export const fetchBeers = () => ({
  type: FETCH_BEERS
})

export const startSession = () => ({
  type: START_SESSION
})
