const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKES_RESTOCKED = 'CAKES_RESTOCKED'

// Action creator
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}

// Action creator
function restockCake(payload = 1) {
  return {
    type: CAKES_RESTOCKED,
    payload: payload
  }
}

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case CAKES_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log('initial State ', store.getState())

// store.subscribe(() => console.log('update state ', store.getState()))
const unsubscribe = store.subscribe(() => console.log('update state ', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

unsubscribe()