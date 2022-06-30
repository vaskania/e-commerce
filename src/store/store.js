import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { logger } from "redux-logger/src";
import storage from 'redux-persist/lib/storage'

import { rootReducer } from "./root-reducer";

// const loggerMiddleware = store => next => action => {
//   if (!action.type) {
//     return next(action)
//   }
//
//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('currentState: ', store.getState())
//
//   next(action)
//
//   console.log('next state: ', store.getState())
// }

const middleWares = [logger]
// const middleWares = [loggerMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)