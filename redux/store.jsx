import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import user from './reducers/user';
import trips from './reducers/trips';
import events from './reducers/events';

const reducers = combineReducers({
    user,
    trips,
    events,
});

const persistConfig = {
    key: 'buddyTrip',
    storage: AsyncStorage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
