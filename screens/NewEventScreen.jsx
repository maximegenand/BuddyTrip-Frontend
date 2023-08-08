import { useRef, useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";
import { BACK_URL } from '@env';
// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewEventStyles";
import { format, parse, compareDesc } from "date-fns";

//Import components
import InputComponent from "../components/Input";

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import { addEvent } from "../redux/reducers/events";
import { StatusBar } from "expo-status-bar";

export default function NewEventScreen({ route, navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  
  const dispatch = useDispatch();

  // Import des paramètres tokenTrip et date depuis la navigation TripScreen => EventScreen
  const tokenTrip = route.params.tokenTrip;
  const currentDate = route.params.currentDate;

  // 2. UseEffect, UseState, UseRef
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(format(new Date(currentDate), "dd'/'MM'/'yyyy"));
  const [description, setDescription] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [ticket, setTicket] = useState("");
  const [seats, setSeats] = useState("");
  const [place, setPlace] = useState("");

  // ETAT rendu conditionnel en fonction de l'event
  const [transport, setTransport] = useState(false);
  const [activity, setActivity] = useState(false);

  // Gestion de la selection du mode de transport
  const [transportSelected, setTransportSelected] = useState("");
  const listSelection = [
    { key: "car", value: "Voiture" },
    { key: "train", value: "Train" },
    { key: "plane", value: "Avion" },
  ];

 




  // 3. Functions

  // Gestion des states des inputs
  const handleInputChange = (name, value) => {
    if (name === 'title') setTitle(value);
    else if (name === 'date') setDate(value);
    else if (name === 'timeStart') setTimeStart(value);
    else if (name === 'timeEnd') setTimeEnd(value);
    else if (name === 'place') setPlace(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'ticket') setTicket(value);
    else if (name === 'seats') setSeats(value);
  }

  const handleTransportPress = () => {
    // Lorsque le bouton "Transport" est pressé, on veut mettre activity à false et transport à true
    setTransport(true);
    setActivity(false);
  };
  const handleActivityPress = () => {
    // Lorsque le bouton "Act" est pressé, on veut mettre activity à true et transport à false
    setActivity(true);
    setTransport(false);
    setTicket("");
    setTimeEnd("");
    setSeats("");
  };


  // fonction handleAddEvent pour créer un nouveau groupe
  async function handleAddEvent() {
    const token = user.token;
    // création de la donnée à envoyer au backend

    // On renseigne les infos dates et heures en format date pour l'enregistrement
    const dateSave = parse(date, "dd'/'MM'/'yyyy", new Date());
    const timeStartSave = parse(`${date}-${timeStart}`, "dd'/'MM'/'yyyy'-'HH':'m", new Date());
    const timeEndSave = transport ? parse(`${date}-${timeEnd}`, "dd'/'MM'/'yyyy'-'HH':'m", new Date()) : null;

    // On vérifie que la date renseignée est égale ou supérieur à celle d'aujourd'hui
    const dateNow = new Date(format(new Date(), "yyyy-MM-dd"));
    if (compareDesc(dateNow, dateSave) < 0) {
      console.error('Impossible d\'enregistrer à une date antérieure');
      return;
    }

    // On vérifie que la date de fin est supérieure à la date de début
    if (transport && timeEndSave < timeStartSave) {
      console.error('Heure de fin non conforme');
      return;
    }

    // Gestion de la catégorie de l'évènement (activity, travel car, travel plane, travel train)
    let categorySave;
    if (activity) {
      categorySave = 'activity';
    }
    else if (transport && transportSelected) {
      categorySave = `travel ${transportSelected}`
    }
    // On vérifie que la catégorie a bien été selectionnée et si transport qu'il ai bien été choisi
    else {
      console.error('manque des infos');
      return;
    }

    const eventData = {
      tokenTrip,
      category: categorySave,
      name: title,
      date: dateSave,
      timeStart: timeStartSave,
      timeEnd: timeEndSave,
      place,
      seats: +seats,
      ticket,
      description,
    }
    // console.log(eventData)

    try {
      const response = await fetch(`${BACK_URL}/events/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token: token, event: eventData}),
      });
      
      const responseData = await response.json();
      // console.log("Réponse du serveur:", responseData);

      if (responseData.result) {
        const newEvent = responseData.event
        // sauvegarder dans le reducer le nouvel event 
        dispatch(addEvent(newEvent))
        // Redirigez l'utilisateur vers EventScreen si la réponse du backend est true
        navigation.navigate("Event", { screen: "Event", params: { tokenEvent: newEvent.tokenEvent } })
      }
    } catch (error) {
    console.error("Erreur lors de l'envoi de l'event au serveur :", error);
    }
  }


  // 4. Return Component
  return (
    <>
      <StatusBar translucent={false} backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FontAwesome
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={30}
            color={GLOBAL_COLOR.TERTIARY}
          />
          <Text style={styles.title}>Nouvel événement</Text>
        </View>
        <ScrollView style={styles.body}>
          <InputComponent
            key="title"
            name="title"
            placeholder="Titre"
            onInputChange={handleInputChange}
            value={title}
          />
          <InputComponent
            key="date"
            name="date"
            placeholder="Date (dd/mm/yyyy)"
            onInputChange={handleInputChange}
            value={date}
          />
          <View style={styles.categorie}>
            <Text style={styles.textCategorie}>Selectionner une categorie :</Text>
            <View style={styles.bubblesContainer}>
              <TouchableOpacity style={[styles.bubble, {opacity: transport ? 1 : 0.5}]} onPress={handleTransportPress}>
                <FontAwesome name="car" size={30} color={GLOBAL_COLOR.PRIMARY} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bubble, {opacity: activity ? 1 : 0.5}]} onPress={handleActivityPress}>
                <FontAwesome name="play" size={30} color={GLOBAL_COLOR.SECONDARY} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          {
            // input si bouton Activity = true
            activity && (
              <>
                <InputComponent
                  key="timeStart"
                  name="timeStart"
                  type="hour"
                  placeholder="Heure (hh:m)"
                  onInputChange={handleInputChange}
                  value={timeStart}
                />
                <InputComponent
                  key="place"
                  name="place"
                  placeholder="Lieu"
                  onInputChange={handleInputChange}
                  value={place}
                />
                <InputComponent
                  key="description"
                  name="description"
                  placeholder="Description"
                  onInputChange={handleInputChange}
                  value={description}
                />
              </>
          )}
          {
            // input si bouton Transport = true
            transport && (
              <>
                <View style={styles.selectList}>
                  <SelectList

                    data={listSelection}
                    setSelected={key => setTransportSelected(key)}
                    save="key"
                    placeholder="Choisir un moyen de transport"
                    search={false}
                    boxStyles={styles.insideList}
                    dropdownStyles={styles.insideList}
                    inputStyles={styles.textList}
                  />
                </View>
                <InputComponent
                  key="timeStart"
                  name="timeStart"
                  type="hour"
                  placeholder="Heure de départ (hh:m)"
                  onInputChange={handleInputChange}
                  value={timeStart}
                />
                <InputComponent
                  key="timeEnd"
                  name="timeEnd"
                  type="hour"
                  placeholder="Heure d'arrivée (hh:m)"
                  onInputChange={handleInputChange}
                  value={timeEnd}
                />
                <InputComponent
                  key="place"
                  name="place"
                  placeholder="Lieu de départ"
                  onInputChange={handleInputChange}
                  value={place}
                />
                {
                  // input si bouton Transport = true
                  transportSelected === "car" && (
                    <InputComponent
                      key="seats"
                      name="seats"
                      placeholder="Places disponibles"
                      onInputChange={handleInputChange}
                      value={seats}
                    />
                  )
                }
                {
                  // input si bouton Transport = true
                  (transportSelected === "train" || transportSelected === "plane") && (
                    <InputComponent
                      key="ticket"
                      name="ticket"
                      placeholder="N° billet"
                      onInputChange={handleInputChange}
                      value={ticket}
                    />
                  )
                }
                <InputComponent
                  key="description"
                  name="description"
                  placeholder="Description"
                  onInputChange={handleInputChange}
                  value={description}
                />

              </>
          )}
          <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.textSave} onPress={() => handleAddEvent()}>Enregistrer</Text>
          </TouchableOpacity>
          <View style={styles.space} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
