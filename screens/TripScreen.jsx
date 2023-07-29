import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals';
import styles from "../styles/TripStyles";

//Import components
import Header  from '../components/Header';
import BoutonAdd from '../components/BoutonAdd';
import Event from '../components/Event'

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {  } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function TripScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef


  // 3. Functions


  // 4. Return Component

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.planning}>
        <View style={styles.calendrier}>
          <View style={styles.fleche_left}>
            <FontAwesome name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY}/>
          </View>
          <View style={styles.day}>
            <Text style={styles.jour}>Aujourd'hui</Text>
            <Text style={styles.date}>23 juillet 1999</Text>
          </View>
          <View style={styles.fleche_left}>
            <FontAwesome name="arrow-right" size={30} color={GLOBAL_COLOR.TERTIARY}/>
          </View>
        </View>
        <Event />
      </View>
      <BoutonAdd/>
    </View>
  );
}