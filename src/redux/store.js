import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './cars/carsSlice';
import { favoriteReducer } from './favorite/favoriteCarsSlice';
import { filterReducer } from './filter/filterSlice';

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
import storage from 'redux-persist/lib/storage';

const favoritePersistConfig = {
    key: 'favorite',
    storage,
    whitelist: ['favoriteCars'],
};

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        favorite: persistReducer(favoritePersistConfig, favoriteReducer),
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
