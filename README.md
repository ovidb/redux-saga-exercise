## redux-saga exercise

The goal of this exercise is to learn redux-saga.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class, destructuring assignment).
You need to have `node`and `yarn`installed in your computer.

## How to install

- `git clone git@github.com:leanjscom/redux-saga-exercise.git`
- `cd redux-saga-exercise`
- `yarn install`
- `yarn start`
- `Open the browser with the url http://localhost:3000` and you will be ready to start


## Exercise

1. Configure redux-saga in src/store/configureStore.dev.js
2. Move the logic inside startSession action (it uses the promise middleware) in src/actions/index.js to a saga in src/sagas/index
3. Move the logic inside fetchBeers action (it uses the thunk middleware) in src/actions/index.js to a saga in src/sagas/index
4. Execute `yarn test`. We have 3 tests in src/sagas/index.spec.js. One is implemented "#Saga: startSession". You need to implement the two in "#Saga: fetchBeers"
5. Bonus. Have you got some extra time? implement a reducer, action and saga so every time the user likes a beer it is stored in the state. Display the list of liked beers in components/Navigations/Menu.jsx where it says "This is exercise question 5 ;)"
