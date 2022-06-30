import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { logger } from "redux-logger/src";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)
// const middleWares = [loggerMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)