import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addDays, format, compareDesc } from "date-fns";

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
  // On récupère la valeur du tokenTrip
  const tokenTrip = route.params.token;

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch(); 



  // 2. UseEffect, UseState, UseRef


  // On récupère les infos du trip et des events que l'on souhaite afficher
  const trip = trips.find(element=> element.tokenTrip === tokenTrip);
  const eventsTrip = events.filter((event) => event.tokenTrip === trip.tokenTrip);

  // Déclaration des dates au bon format
  const dateStart = new Date(trip.dateStart);
  const dateEnd = new Date(trip.dateEnd);

  // Initialisation de la date d'affichage par défault
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    if (compareDesc(currentDate, dateStart) === 1) {
      setCurrentDate(dateStart);
    }
  }, []);

  // Fonction pour afficher la date suivante
  const onNextDate = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  // Fonction pour afficher la date précédente
  const onPreviousDate = () => {
    const previousDate = addDays(currentDate, -1);
    setCurrentDate(previousDate);
  };

  // Affichage de la date actuelle
  const dateScreen = (
    <View style={styles.day}>
      <Text style={styles.jour}>Aujourd'hui</Text>
      <Text style={styles.date}>{format(currentDate, "dd/MM/yyyy")} </Text>
    </View>
  );

  // Affichage des events
  const eventsScreen = eventsTrip.map((event) => (
    <Event
      key={event.tokenEvent}
      event={event}
      handlePress={() => navigation.navigate('Event', { screen: 'Event', params: { tokenEvent: event.tokenEvent } })}
    />
  ));



  // 4. Return Component

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.planning}>
        <View style={styles.calendrierEvent}>
          <View style={styles.calendrier}>
            <TouchableOpacity style={styles.fleche_left} onPress={onPreviousDate}>
              <FontAwesome
                name="arrow-left"
                size={30}
                color={GLOBAL_COLOR.TERTIARY}
              />
            </TouchableOpacity>
            {dateScreen}
            <TouchableOpacity style={styles.fleche_left} onPress={onNextDate}>
              <FontAwesome
                name="arrow-right"
                size={30}
                color={GLOBAL_COLOR.TERTIARY}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.events}>
            {eventsScreen}
          </ScrollView>
          <BoutonAdd
            onPress={() => navigation.navigate("Event")}
            style={styles.boutonAdd}
          />
        </View>
      </View>
    </View>
      
  );
}
