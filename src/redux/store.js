import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './user/slice';
import { loadingReducer } from './loader/slice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['favoriteUsers', 'user'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    loading: loadingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
