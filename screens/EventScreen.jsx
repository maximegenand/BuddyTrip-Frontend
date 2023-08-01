import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { format } from "date-fns";
import { fr } from "date-fns/esm/locale";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/EventStyles";
import Header from "../components/Header";

//Import components

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
  const [event, setEvent] = useState(null)
  const tokenEventFromRoute = route.params.params.tokenEvent

  useEffect(() => {
    const eventFiltered = events.filter((event) => event.tokenEvent=== tokenEventFromRoute )
    setEvent(eventFiltered)
  }, []);

  let eventTab, eventName, eventCreateur, eventParticipants, eventPlace, eventDescritpion, eventpointInteret, eventDate
  if (event) {
     eventTab = event[0]
     eventName = eventTab.name
     eventCreateur = eventTab.user.username
     eventParticipants = eventTab.participants.length + 1
     eventPlace = eventTab.place
     eventDescritpion = eventTab.description
     eventpointInteret = eventTab.infos
     eventDate = event[0].date
  }
  let eventPointInteretList;
  if(eventpointInteret) {
     eventPointInteretList = eventpointInteret.map((data, i) => {
      return (
        <TouchableOpacity key={i} onPress={() => Linking.openURL(data.uri) }>
          <Text style={styles.interetTextList}>• {data.name}</Text>
    </TouchableOpacity>
    )
  })
  }
  let date;
  if(eventDate) {
    date = format(new Date(eventDate), 'd MMMM',{locale : fr})
  }
  console.log(date)

  
  // 3. Functions

  // 4. Return Component
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
          <Text style={styles.name}>{eventName}</Text>
          <Text style={styles.ajouteur}>Ajouté par {eventCreateur}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.listBuddy}>
          <Text style={styles.buddysWord}>{eventParticipants} Buddys</Text>
          <TouchableOpacity style={styles.BouttonAddBuddy}>
            <Text style={styles.BouttonPlus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infos}>
          <Text style={styles.textInfos}>
            <Text style={styles.textInfosBold}>Date</Text>: {date}
          </Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>heure</Text> : 13h</Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Lieu</Text> : {eventPlace}</Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Places</Text> : 6 Places restantes</Text>
          <View style={styles.lines} />
          <Text style={styles.desc}>
            {eventDescritpion}
          </Text>
          <View>
          </View>
          <View style={styles.lines} />
          <View style={styles.pointInteret}>
            <Text style={styles.interetText}>Point d'intérêt :</Text>
            {eventPointInteretList}
          </View>
        </View>
      </View>
    </View>
  );
}
