import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, SafeAreaView, ImageBackground, ActivityIndicator } from "react-native";
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
import SvgArrow from "../components/svg/SvgArrow";

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

  // Affichage du loader lors du fetch pour récupérer les events
  const [ isLoad, setIsLoad ] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  // On récupère le trip dans le backend avec les events et infos, puis on sauvegarde dans le redux storage
  useEffect(() => {
    (async () => {
      setIsLoad(true);
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
      setIsLoad(false);
    })();
  }, []);

  // On récupère les infos du trip que l'on souhaite afficher
  const trip = trips.find((element) => element.tokenTrip === tokenTrip);

  // Déclaration des dates au bon format
  const dateStart = new Date(trip.dateStart);

  // Initialisation de la date d'affichage par défault
  const initialDate = () => {
    const dateNow = new Date(format(new Date(), "yyyy-MM-dd"));
    // Si on a passé un paramètre dans la route, on affiche le jour selectionné
    if (route.params?.date) return new Date(route.params.date);
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
  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const dayIndex = date.getDay();
    
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return "Aujourd'hui";
    } else {
      return daysOfWeek[dayIndex];
    }
  };

  //On récupère les infos des events que l'on souhaite afficher
  const eventsTrip = events.filter(
    (event) => event.tokenTrip === trip.tokenTrip && compareDesc(new Date(event.date), currentDate) === 0
  );
  // Affichage des events
  const eventsScreen = eventsTrip.map((event) => (
    <Event
      key={event.tokenEvent}
      event={event}
      handlePress={() => navigation.navigate("Event", { screen: "Event", tokenEvent: event.tokenEvent })}
    />
  ));

  // Affichage des 4 premiers participants du voyage dans le header
  const listParticipants = [user.username, ...trip.participants.map(participant => participant.username)];
  let formattedListFour = listParticipants.slice(0, 4).join(", ");
  if (listParticipants.length > 4) formattedListFour += " ...";

  // allParticipantsModal => afficher la liste des participants pour la Modal
  const allParticipantsModal = listParticipants.join(", ");

  const uriBackground = "https://res.cloudinary.com/djjyzmssb/image/upload/v1691664601/background_x2cjvc.png";

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} statusBarTranslucent={true}>
          <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
              <View style={styles.modalInner}>
              <TouchableOpacity style={styles.modalIcon} activeOpacity={0.8} onPress={() => {navigation.navigate("NewTrip",  { screen: "NewTrip", tokenTrip }); setModalVisible(false)}}>
                <FontAwesome style={styles.bell} name="edit" size={30} color={GLOBAL_COLOR.SECONDARY} />
              </TouchableOpacity>
              <View style={styles.modalBubble}>
                <Text style={styles.modalTitle}>{trip.name}</Text>
              </View>
              <View style={styles.modalBubble}>
                <Text style={styles.modalTitle}>{trip.description}</Text>
              </View>
              <View style={styles.modalBubble}>
                <Text style={styles.modalTitle}>{allParticipantsModal}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <Header
          navigation={navigation}
          title={trip.name}
          participants={formattedListFour}
          handlePress={() => setModalVisible(true)}
          style={styles.header}
        />
        <View style={styles.innerContainer}>
          <View style={styles.calendarContainer}>
          <ImageBackground source={{uri: uriBackground}} style={styles.calendarBackground} resizeMode="stretch">
            <TouchableOpacity style={styles.flecheLeft} onPress={onPreviousDate}>
              <SvgArrow width={60} height={60} fill={GLOBAL_COLOR.PRIMARY} direction="left" />
            </TouchableOpacity>
            <View style={styles.dateContainer}>
              <Text style={styles.day}>{getDayOfWeek(currentDate)}</Text>
              <Text style={styles.date}>{formatDate(currentDate, true)} </Text>
            </View>
            <TouchableOpacity style={styles.flecheRight} onPress={onNextDate}>
              <SvgArrow width={60} height={60} fill={GLOBAL_COLOR.PRIMARY} />
            </TouchableOpacity>
          </ImageBackground>
          </View>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.content}>
              { // On affiche les events s'ils existents
              eventsScreen.length > 0 ?
                eventsScreen :
                isLoad ? // Sinon si on est en train de fetch on affiche la roue
                  <ActivityIndicator size="large" color={GLOBAL_COLOR.SECONDARY} /> :
                  // Sinon on affiche un message qu'aucun evenement n'existe aujourd'hui
                  <Text style={styles.noEvent}>Aucun événement</Text>
              }
            </View>
          </ScrollView>
          <View style={styles.add}>
            <BoutonAdd onPress={() => navigation.navigate("NewEvent", { screen: "NewEvent", tokenTrip, currentDate: currentDate.toJSON() })} buttonStyle={styles.boutonAdd} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
