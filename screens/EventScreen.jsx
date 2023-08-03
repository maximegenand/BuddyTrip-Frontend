import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { format } from "date-fns";
import { fr } from "date-fns/esm/locale";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/EventStyles";

//Import components
import Header from "../components/Header";
import BuddiesBar from "../components/BuddiesBar";

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import {} from "../redux/reducers/events";

export default function EventScreen({ route, navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // On initialise l'event pour pouvoir le lire directement depuis le state event
  const tokenEvent = route.params.params.tokenEvent
  const initialEvent = () => {
    const findEvent = events.find( e => e.tokenEvent === tokenEvent );
    return findEvent;
  };
  const [ event, setEvent ] = useState(initialEvent());

  //let eventTab, eventName, eventCreateur, eventParticipants, eventPlace, eventDescription, eventpointInteret, eventDate, eventSeat, eventType, eventDepartHour, eventArriveHour
  const { user:userEvent, participants, date, name, description, category, place, timeStart, timeEnd, seats, infos } = event;

  // On défini le nombre de participants
  const sumParticipants = participants.length + 1;


  
  // 3. Functions

  // 4. Return Component

  // Gestion des horaires
  const timeScreen = category === 'travel' ? 
    (
    <>
      <Text style={styles.textInfos}><Text style={styles.textInfosBold}>départ :</Text> {format(new Date(timeStart), "HH'h'mm",{locale : fr})}</Text>
      <Text style={styles.textInfos}><Text style={styles.textInfosBold}>arrivée :</Text> {format(new Date(timeEnd), "HH'h'mm",{locale : fr})}</Text>
    </>
  ) : (
    <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Heure :</Text> {format(new Date(timeStart), "HH'h'mm",{locale : fr})}</Text>
  );

  // Gestion des places disponibles
  const seatsScreen = seats ? ( 
    <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Places</Text> : {seats - sumParticipants} places restantes</Text>
  ) : false;

  // Gestion des point d'interet
  infosScreen = infos.map(data => (
    <TouchableOpacity key={data.tokenInfo} onPress={() => Linking.openURL(data.uri) }>
      <Text style={styles.interetTextList}>• {data.name}</Text>
    </TouchableOpacity>
  ));

  // Retour du component
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.8}>
            <FontAwesome
              style={styles.fleche}
              name="arrow-left"
              size={30}
              color={GLOBAL_COLOR.TERTIARY}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header_right}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ajouteur}>Ajouté par {userEvent.username}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.listBuddy}>
          <View style={styles.bubbles}>
            <BuddiesBar buddies={participants} max={10} />
          </View>
          <TouchableOpacity style={styles.BouttonAddBuddy}>
            <Text style={styles.BouttonPlus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infos}>
          <Text style={styles.textInfos}>
            <Text style={styles.textInfosBold}>Date</Text>: {format(new Date(date), 'd MMMM',{locale : fr})}
          </Text>
          {timeScreen}
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Lieu</Text> : {place}</Text>
          {seatsScreen}
          <View style={styles.lines} />
          <Text style={styles.desc}>
            {description}
          </Text>
          <View>
          </View>
          { infosScreen && (
            <>
            <View style={styles.lines} />
            <View style={styles.pointInteret}>
              <Text style={styles.interetText}>Point d'intérêt :</Text>
              {infosScreen}
            </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
