import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { logger } from "redux-logger/src";
import storage from 'redux-persist/lib/storage'

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
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