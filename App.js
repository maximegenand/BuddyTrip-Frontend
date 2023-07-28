import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RegisterScreen from './screens/RegisterScreen'
import AllTripsScreen from './screens/AllTripsScreen'
import EventScreen from './screens/EventScreen'
import TripScreen from './screens/TripScreen'
import ProfilScreen from './screens/ProfilScreen'
import DocumentScreen from './screens/DocumentScreen'
import ChatScreen from './screens/ChatScreen'

import { Provider } from 'react-redux';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import user from './reducers/user';
import trips from './reducers/trips';

import { persistStore, persistReducer } from "redux-persist";
import { persistGate } from 'redux-persist/integration/react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistGate } from "redux-persist/integration/react";

const reducers = combineReducers({user})
const persistConfig = {
  key : 'buddyTrip',
  storage : AsyncStorage,
  whitelist: ['user'] 
}

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
}); 

const persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName = '';

        if (route.name === 'Trip') {
          iconName = 'home';
        } else if (route.name === 'Document') {
          iconName = 'file';
        } else if (route.name === 'Profil') {
          iconName = 'user'
        } else if (route.name ==='Chat') {
          iconName = 'comment'
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#E9671F',
      tabBarInactiveTintColor: '#b2b2b2',
      headerShown: false,
    })}>
      <Tab.Screen name="Trip" component={TripScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Document" component={DocumentScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="AllTrips" component={AllTripsScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
