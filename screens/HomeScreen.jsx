import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Br, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/HomeStyles";

//Import components
import SvgLogo from '../components/svg/SvgLogo';
import SvgUser from '../components/svg/SvgUser';
import BoutonAdd from '../components/BoutonAdd';

//Import modules
import { screenPeriod } from '../modules/dates';

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {  } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function HomeScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef


  // 3. Functions

  // Fonction d'affichage de la liste des Trips
  const tripList = trips.map(trip => (
    <TouchableOpacity style={styles.tripContainer} key={trip.tokenTrip} onPress={() => navigation.navigate('TabNavigator')}>
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
        <View style={styles.add}><BoutonAdd /></View>
      </View>
    </View>
  );
}
