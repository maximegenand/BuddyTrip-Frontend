import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addDays, format } from "date-fns";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/TripStyles";

//Import components
import Header from "../components/Header";
import Event from "../components/Event";
import BoutonAdd from "../components/BoutonAdd";
//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {  } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';

export default function TripScreen({ route, navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch(); 
  const tokenTripFromRoute = route.params.token
  // 2. UseEffect, UseState, UseRef
  const startDate = new Date(trips[0].dateStart);
  const today = new Date();
  let initialDate = startDate;
  const found = trips.find(element=> element.tokenTrip === tokenTripFromRoute)

  // 3. Functions
  if (startDate < today) {
    initialDate = today;
  }
  const [currentDate, setCurrentDate] = useState(initialDate);
  // État local pour conserver la date actuellement affichée

  const onNextDate = () => {
    // Fonction pour afficher la date suivante
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  const onPreviousDate = () => {
    // Fonction pour afficher la date précédente
    const previousDate = addDays(currentDate, -1);
    setCurrentDate(previousDate);
  };
  const dateStart = (
    <Text style={styles.date}> {format(currentDate, "dd/MM/yyyy")}</Text>
  );

  // 4. Return Component

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.planning}>
        <View style={styles.calendrierEvent}>
          <View style={styles.calendrier}>
            <View style={styles.fleche_left}>
              <TouchableOpacity onPress={onPreviousDate}>
                <FontAwesome
                  name="arrow-left"
                  size={30}
                  color={GLOBAL_COLOR.TERTIARY}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.day}>
              <Text style={styles.jour}>Aujourd'hui</Text>
              <Text style={styles.date}>{dateStart} </Text>
            </View>
            <View style={styles.fleche_left}>
              <TouchableOpacity onPress={onNextDate}>
                <FontAwesome
                  name="arrow-right"
                  size={30}
                  color={GLOBAL_COLOR.TERTIARY}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.events}>
            <Event onPress={() => navigation.navigate("Event")} />
            <Event onPress={() => navigation.navigate("Event")} />
            <Event onPress={() => navigation.navigate("Event")} />
          </ScrollView>
          <BoutonAdd
            onPress={() => navigation.navigate("EventScreen")}
            style={styles.boutonAdd}
          />
        </View>
      </View>
    </View>
      
  );
}
