import { GLOBAL_COLOR } from './styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import des Fonts Google : https://github.com/expo/google-fonts/tree/master/font-packages
import { useFonts, MontserratAlternates_600SemiBold_Italic } from '@expo-google-fonts/montserrat-alternates';

// Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Import Screens
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import TripScreen from './screens/TripScreen';
import ProfilScreen from './screens/ProfilScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import ChatScreen from './screens/ChatScreen';
import NewEventScreen from './screens/NewEventScreen';

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
        if      (route.name === 'Trip')       iconName = 'home';
        else if (route.name === 'Documents')  iconName = 'file';
        else if (route.name === 'Profil')     iconName = 'user';
        else if (route.name === 'Chat')       iconName = 'comment';

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: GLOBAL_COLOR.SECONDARY,
      tabBarInactiveTintColor: '#b2b2b2',
      headerShown: false,
    })}>
      <Tab.Screen name="Trip" component={TripScreen}/>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Documents" component={DocumentsScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  // Initialisation des fonts Google
  let [fontsLoaded] = useFonts({
    'Montserrat-Alternates-SemiBold-Italic': MontserratAlternates_600SemiBold_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Event" component={EventScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
