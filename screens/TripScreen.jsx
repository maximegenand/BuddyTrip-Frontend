import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, ScrollView, Modal, SafeAreaView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addDays, format, compareDesc } from "date-fns";
import { BACK_URL } from "@env";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/TripStyles";

//Import components
import Header from "../components/Header";
import Event from "../components/Event";
import BoutonAdd from "../components/BoutonAdd";

//Import modules
import { formatDate, formatPeriod } from "../modules/dates";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import { updateTrip } from "../redux/reducers/trips";
import { addAllEvents } from "../redux/reducers/events";

export default function TripScreen({ route, navigation }) {
  // On récupère la valeur du tokenTrip
  const tokenTrip = route.params.tokenTrip;

  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef
  const [modalVisible, setModalVisible] = useState(false);
  // On récupère le trip dans le backend avec les events et infos, puis on sauvegarde dans le redux storage
  // console.log('TRIP Rerender : '+tokenTrip);
  useEffect(() => {
    (async () => {
      const random = Math.round(Math.random() * 1000);
      //console.log('TripScreen useEffect - Start',random);
      try {
        const tripFetch = await fetch(`${BACK_URL}/trips/${tokenTrip}?token=${user.token}`);
        const data = await tripFetch.json();

        // On enregistre les infos dans le reducer si tout s'est bien déroulé
        if (data.result) {
          dispatch(updateTrip(data.trip));
          dispatch(addAllEvents(data.events));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      //console.log('TripScreen useEffect - End',random);
    })();
  }, []);

  // On récupère les infos du trip que l'on souhaite afficher
  const trip = trips.find((element) => element.tokenTrip === tokenTrip);

  // Déclaration des dates au bon format
  const dateStart = new Date(trip.dateStart);

  // Initialisation de la date d'affichage par défault
  const initialDate = () => {
    const dateNow = new Date(format(new Date(), "yyyy-MM-dd"));
    // Si le jour actuel est plus récent que le 1er jour du Trip, on affiche aujourd'hui, sinon on affiche le 1er jour du trip
    if (compareDesc(dateNow, dateStart) === 1) return dateStart;
    return dateNow;
  };
  const [currentDate, setCurrentDate] = useState(initialDate());

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
      <Text style={styles.date}>{formatDate(currentDate, true)} </Text>
    </View>
  );

  //On récupère les infos des events que l'on souhaite afficher
  const eventsTrip = events.filter(
    (event) =>
      event.tokenTrip === trip.tokenTrip && compareDesc(new Date(event.date), currentDate) === 0
  );
  // Affichage des events
  const eventsScreen = eventsTrip.map((event) => (
    <Event
      key={event.tokenEvent}
      event={event}
      handlePress={() =>
        navigation.navigate("Event", { screen: "Event", params: { tokenEvent: event.tokenEvent } })
      }
    />
  ));

  // code permettant d'afficher les 4 premiers participants du voyage dans le header
  const affichageParticipants = trip.participants;
  const quatrePremiers = affichageParticipants
    .slice(0, 4)
    .map((participant) => participant.username);
  const formattedUsername = quatrePremiers
    .map((username, i) => {
      if (i === quatrePremiers.length - 1) {
        return username + "...";
      } else {
        return username;
      }
    })
    .join(", ");

  // allParticipantsModal => afficher la liste des participants pour la Modal
  const allParticipantsModal = affichageParticipants
    .map((participant) => participant.username)
    .join(", ");

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <View style={styles.bulleModal}>
            <Text style={styles.modalTitle}>{trip.name}</Text>
          </View>
          <View style={styles.bulleModal}>
            <Text style={styles.modalTitle}>{trip.description}</Text>
          </View>
          <View style={styles.bulleModal}>
            <Text style={styles.modalTitle}>{allParticipantsModal}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <Header navigation={navigation} title={trip.name} participants={formattedUsername} handlePress={() => setModalVisible(true) } />
      <View style={styles.planning}>
        <View style={styles.calendrierEvent}>
          <View style={styles.calendrier}>
            <TouchableOpacity style={styles.fleche_left} onPress={onPreviousDate}>
              <FontAwesome name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
            </TouchableOpacity>
            {dateScreen}
            <TouchableOpacity style={styles.fleche_left} onPress={onNextDate}>
              <FontAwesome name="arrow-right" size={30} color={GLOBAL_COLOR.TERTIARY} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.events}>
            {eventsScreen}
          </ScrollView>
          <BoutonAdd
            onPress={() => navigation.navigate("NewEvent",  { screen: "NewEvent", tokenTrip, currentDate: currentDate.toString() })}
            buttonStyle={styles.boutonAdd}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
