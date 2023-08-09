import { useRef, useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewEventStyles";
import { format, parse, compareDesc } from "date-fns";

//Import components
import HeaderNav from "../components/HeaderNewTrip";
import LoadingModal from "../components/LoadingModal";
import InputComponent from "../components/Input";

//Import modules
import { formatDate } from "../modules/formatDate";
import { formatTime } from "../modules/formatTime";
import { isValidDate } from "../modules/isValidDate";

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

  // Gère l'affichage de la modale
  const [modalLoadingVisible, setModalLoadingVisible] = useState(false);

  // États pour gérer les valeurs des champs
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(format(new Date(currentDate), "dd'/'MM'/'yyyy"));
  const [description, setDescription] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [ticket, setTicket] = useState("");
  const [seats, setSeats] = useState("");
  const [place, setPlace] = useState("");
  const [textError, setTextError] = useState("");

  // Permet de supprimer le message d'erreur dès que l'utilisateur tape un nouveau texte
  useEffect(() => {
    if (textError) setTextError(null);
  }, [title, date, description, timeStart, timeEnd, ticket, seats, place])

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
    else if (name === 'date') handleDateChange(value);
    else if (name === 'timeStart') handleTimeChange(value, 'start');
    else if (name === 'timeEnd') handleTimeChange(value, 'end');
    else if (name === 'place') setPlace(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'ticket') setTicket(value);
    else if (name === 'seats') setSeats(value);
  }

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Fonction pour gérer les changements de texte dans le champ de saisie de la date
  const handleDateChange = (text, name) => {
    // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
    const formattedDate = formatDate(text);
    // Mettre à jour l'état avec la date formatée
    setDate(formattedDate);
  };
  // Fonction pour gérer les changements de texte dans les champs de saisie de time
  const handleTimeChange = (text, name) => {
    // Formater le texte du time pour qu'il ait le format "HH:mm"
    const formattedTime = formatTime(text);
    // Mettre à jour l'état avec le time 
    name === 'start' && setTimeStart(formattedTime);
    name === 'end' && setTimeEnd(formattedTime);
  };

  const handleTransportPress = () => {
    // Lorsque le bouton "Transport" est pressé, on veut mettre activity à false et transport à true
    setTransport(true);
    setActivity(false);
  };
  const handleActivityPress = () => {
    // Lorsque le bouton "Act" est pressé, on veut mettre activity à true et transport à false
    setActivity(true);
    setTransport(false);
    setTransportSelected("");
    setTicket("");
    setTimeEnd("");
    setSeats("");
  };


  // fonction handleAddEvent pour créer un nouveau event
  async function handleAddEvent() {
    // On annule l'action si la modale est affichée
    if (modalLoadingVisible) return;
    // On affiche la modale le temps du fetch
    setModalLoadingVisible(true);

    // On vérifie que les inputs obligatoires sont remplis
    if(
      // On vérifie les champs de base ainsi que si l'utilisateur a coché un transport ou une activité
      (!title || !date || (!transportSelected && !activity) || !description || !timeStart || !description || !place)
      // Si c'est un transport, on vérifie ensuite une heure d'arrivée
      || (transportSelected && !timeEnd)
    ) {
      console.log("Tous les champs doivent être remplis.");
      setModalLoadingVisible(false);
      setTextError("Formulaire incomplet");
      return;
    }


    // On renseigne les infos dates et heures en format date pour l'enregistrement
    const dateSave = parse(date, "dd'/'MM'/'yyyy", new Date());
    const timeStartSave = parse(`${date}-${timeStart}`, "dd'/'MM'/'yyyy'-'HH':'m", new Date());
    const timeEndSave = transport ? parse(`${date}-${timeEnd}`, "dd'/'MM'/'yyyy'-'HH':'m", new Date()) : null;

    // On vérifie que la date renseignée est égale ou supérieur à celle d'aujourd'hui
    const dateNow = new Date(format(new Date(), "yyyy-MM-dd"));
    if (compareDesc(dateNow, dateSave) < 0) {
      console.log("Impossible d'enregistrer à une date antérieure");
      setModalLoadingVisible(false);
      setTextError("Date inférieure à aujourd'hui");
      return;
    }

    // On vérifie que l'heure de fin est supérieure à l'heure de début
    if (transport && timeEndSave < timeStartSave) {
      console.log("L'heure de fin doit être supérieure à l'heure de début.");
      setModalLoadingVisible(false);
      setTextError("Heure de fin < Heure de début");
      return;
    }

    // Gestion de la catégorie de l'évènement (activity, travel car, travel plane, travel train)
    let categorySave;
    if (activity) categorySave = 'activity';
    else if (transport && transportSelected) categorySave = `travel ${transportSelected}`;
    // On vérifie que la catégorie a bien été selectionnée et si transport qu'il ai bien été choisi
    else {
      console.log("La catégorie sélectionnée n'est pas correcte");
      setModalLoadingVisible(false);
      setTextError("Erreur de catégorie");
      return;
    }

    // Gestion des places disponibles - On vérifie si on envoie un nombre
    const seatsSave = +seats;
    if (isNaN(seatsSave)) {
      console.log("Mauvais input dans seat");
      setModalLoadingVisible(false);
      setTextError("Erreur dans l'input places");
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
      seats: seatsSave,
      ticket,
      description,
    }

    try {
      const response = await fetch(`${BACK_URL}/events/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token: user.token, event: eventData}),
      });
      
      const responseData = await response.json();
      // console.log("Réponse du serveur:", responseData);

      if (responseData.result) {
        const newEvent = responseData.event
        // sauvegarder dans le reducer le nouvel event 
        dispatch(addEvent(newEvent));
        // Redirigez l'utilisateur vers EventScreen si la réponse du backend est true
        await navigation.navigate("Event", { screen: "Event", tokenEvent: newEvent.tokenEvent, isNew: true });
        setModalLoadingVisible(false);
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
      <LoadingModal visible={modalLoadingVisible} />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav title="Nouvel événement" navigation={navigation} />
          <ScrollView style={styles.body}>
            <Text style={styles.textError}>{textError}</Text>
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
              type="numeric"
              placeholder="Date (JJ/MM/AAAA)"
              onInputChange={handleInputChange}
              value={date}
              maxLength={10}
            />
            <View style={styles.categorie}>
              <Text style={styles.textCategorie}>Selectionner une categorie :</Text>
              <View style={styles.bubblesContainer}>
                <TouchableOpacity style={[styles.bubble, {opacity: transport ? 1 : 0.5}]} onPress={handleTransportPress}>
                  <FontAwesome name="car" size={30} color={GLOBAL_COLOR.PRIMARY} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bubble, {opacity: activity ? 1 : 0.5}]} onPress={handleActivityPress}>
                  <FontAwesome name="play" size={30} color={GLOBAL_COLOR.PRIMARY} />
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
                    type="numeric"
                    placeholder="Heure (HH:mm)"
                    onInputChange={handleInputChange}
                    value={timeStart}
                    maxLength={5}
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
                    type="description"
                    placeholder="Description"
                    onInputChange={handleInputChange}
                    value={description}
                  />
                </>
              )
            }
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
                    type="numeric"
                    placeholder="Heure de départ (HH:mm)"
                    onInputChange={handleInputChange}
                    value={timeStart}
                    maxLength={5}
                  />
                  <InputComponent
                    key="timeEnd"
                    name="timeEnd"
                    type="numeric"
                    placeholder="Heure d'arrivée (HH:mm)"
                    onInputChange={handleInputChange}
                    value={timeEnd}
                    maxLength={5}
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
                        type="seats"
                        placeholder="Places disponibles"
                        onInputChange={handleInputChange}
                        value={seats}
                        maxLength="2"
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
                    type="description"
                    placeholder="Description"
                    onInputChange={handleInputChange}
                    value={description}
                  />
                </>
              )
            }
            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.textSave} onPress={() => handleAddEvent()}>Enregistrer</Text>
            </TouchableOpacity>
            <View style={styles.space} />
          </ScrollView>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
