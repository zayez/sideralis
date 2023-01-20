import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import photos from "./slices/photosSlice"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  photos,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)
