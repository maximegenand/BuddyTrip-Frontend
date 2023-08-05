import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, Linking, SafeAreaView, StatusBar } from "react-native";
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
import { formatDate } from '../modules/dates'

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

  // On recupère les infos de l'évènement dans le storage grâce à son tokenEvent
  const tokenEvent = route.params.params.tokenEvent
  const event = events.find( e => e.tokenEvent === tokenEvent );

  // On destructure les données
  const { user:userEvent, participants, date, name, description, category, place, timeStart, timeEnd, seats, infos } = event;

  // On défini le nombre de participants
  const sumParticipants = participants.length + 1;



  // 3. Functions

  // 4. Return Component

  // Gestion des horaires
  const timeScreen = category === 'travel' ? (
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
    <>
      <StatusBar translucent={false} backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.return} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>{name}</Text>
            <Text style={styles.titleBy}>Ajouté par {userEvent.username}</Text>
          </View>
          <FontAwesome name="car" size={30} color={GLOBAL_COLOR.TERTIARY} />
        </View>
        <View style={styles.body}>
          <View style={styles.buddiesContainer}>
            <Text style={styles.titleBuddies}>Buddies déjà inscrits :</Text>
            <View style={styles.buddiesContent}>
           
                <BuddiesBar style={styles.bubbles} buddies={participants} max={5} />
         
              <TouchableOpacity style={styles.buttonAddBuddy}>
                <FontAwesome name="plus" size={30} color={GLOBAL_COLOR.SECONDARY} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infos}>
            <Text style={styles.textInfos}>
              <Text style={styles.textInfosBold}>Date :</Text> {formatDate(new Date(date))}
            </Text>
            {timeScreen}
            <Text style={styles.textInfos}>
              <Text style={styles.textInfosBold}>Lieu</Text> : {place}
            </Text>
            {seatsScreen}
            <View style={styles.lines} />
            <Text style={styles.desc}>{description}</Text>
            <View></View>
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
      </SafeAreaView>
    </>
  );
}
