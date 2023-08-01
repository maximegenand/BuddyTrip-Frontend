import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Br, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/HomeStyles";

// //Import components
import SvgLogo from '../components/svg/SvgLogo';
import SvgUser from '../components/svg/SvgUser';
import BoutonAdd from '../components/BoutonAdd';

//Import modules
import { screenPeriod } from '../modules/dates';
import { useNavigation } from '@react-navigation/native';

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {  } from '../redux/reducers/user';
import { addAllTrips } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function HomeScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // On récupère la liste des trips dans le backend et on sauvegarde dans le redux storage
  useEffect(() => {
    (async () => {
      try {
        console.log(user.token);
        const tripsFetch = await fetch(`${BACK_URL}/trips/next?token=${user.token}`);
        const data = await tripsFetch.json();

        // On enregistre les infos dans le reducer si tout s'est bien déroulé
        if(data.result) {
            dispatch(addAllTrips(data.trips));          
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  
  // 3. Functions
  const navigationTokenTrip = useNavigation();

    const handlePressTokenTrip = (tokenTrip) => {
      const dataToSend = tokenTrip
      navigation.navigate('TabNavigator', { screen: 'Trip', params: { token: tokenTrip } });
    };
  

  // Fonction d'affichage de la liste des Trips
  const tripList = trips.map(trip => (
    <TouchableOpacity style={styles.tripContainer} key={trip.tokenTrip} onPress={() => handlePressTokenTrip(trip.tokenTrip)}>
      <Text style={styles.tripTitle}>{trip.name}</Text>
      <View style={styles.tripSubContainer}>
        <Text style={styles.tripParticipants}>{trip.participants.length} participants</Text>
        <Text style={styles.tripDate}>{screenPeriod([trip.dateStart, trip.dateEnd])}</Text>
      </View>
    </TouchableOpacity>
  ));


  // 4. Return Component
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={GLOBAL_COLOR.TERTIARY} barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logo}>
          <SvgLogo width={50} height={50} fill={GLOBAL_COLOR.TERTIARY} />
          <Text style={styles.logoText}>BuddyTrip</Text>
        </View>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')} activeOpacity={0.8}>
            <SvgUser width={45} height={45} fill={GLOBAL_COLOR.PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.listTrips}>
          { // Si un trip est enregistré, on affiche la liste, sinon on envoie un message de remplacement
          tripList.length ?
            tripList
            :
            <Text>Aucun Trip renseigné</Text>
          }
        </View>
        <View style={styles.add}><BoutonAdd onPress={() => navigation.navigate('NewTrip')}/></View>
      </View>
    </View>
  );
}
