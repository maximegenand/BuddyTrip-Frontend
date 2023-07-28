import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Import Screens
import RegisterScreen from './screens/RegisterScreen';
import AllTripsScreen from './screens/AllTripsScreen';
import EventScreen from './screens/EventScreen';
import TripScreen from './screens/TripScreen';
import ProfilScreen from './screens/ProfilScreen';
import DocumentScreen from './screens/DocumentScreen';
import ChatScreen from './screens/ChatScreen';

// Import Redux persist
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
const persistor = persistStore(store);


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
