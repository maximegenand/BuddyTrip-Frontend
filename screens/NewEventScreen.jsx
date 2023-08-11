import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Keyboard, KeyboardAvoidingView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";
import { format, parse, compareDesc } from "date-fns";
import { BACK_URL } from "@env";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewEventStyles";

//Import components
import HeaderNav from "../components/HeaderNewTrip";
import LoadingModal from "../components/LoadingModal";
import InputComponent from "../components/Input";
import SvgCar from "../components/svg/SvgCar";
import SvgPlane from "../components/svg/SvgPlane";
import SvgTrain from "../components/svg/SvgTrain";
import SvgActivity from "../components/svg/SvgActivity";
import SvgPeople from "../components/svg/SvgPeople";

//Import modules
import { formatDate } from "../modules/formatDate";
import { formatTime, timeToText } from "../modules/formatTime";
import { isValidDate } from "../modules/isValidDate";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import { addEvent, updateEvent } from "../redux/reducers/events";
import { StatusBar } from "expo-status-bar";

export default function NewEventScreen({ route, navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);

  const dispatch = useDispatch();

  // On gère la partie edition ou nouvel event en regardant les params qui nous sont envoyés

  // Si on a un tokenEvent, c'est qu'on édite
  let event = {};
  if (route.params.tokenEvent) {
    event = events.find((e) => e.tokenEvent === route.params.tokenEvent);
    //console.log(event)
  }
  // Sinon c'est qu'on créé un nouvel event, et on récupère on a un TokenTrip et une date depuis TripScreen
  else {
    event.tokenTrip = route.params.tokenTrip;
    event.date = route.params.currentDate;
  }

  //return console.log(event);

  // 2. UseEffect, UseState, UseRef

  // Gère l'affichage de la modale
  const [modalLoadingVisible, setModalLoadingVisible] = useState(false);

  // États pour gérer les valeurs des champs
  const [title, setTitle] = useState(event.name ?? "");
  const [date, setDate] = useState(format(new Date(event.date), "dd'/'MM'/'yyyy"));
  const [description, setDescription] = useState(event.description ?? "");
  const [timeStart, setTimeStart] = useState(event.timeStart ? timeToText(event.timeStart, ":") : "");
  const [timeEnd, setTimeEnd] = useState(event.timeEnd ? timeToText(event.timeEnd, ":") : "");
  const [ticket, setTicket] = useState(event.ticket ?? "");
  const [seats, setSeats] = useState(event.seats ?? "");
  const [place, setPlace] = useState(event.place ?? "");
  const [textError, setTextError] = useState("");

  // Permet de supprimer le message d'erreur dès que l'utilisateur tape un nouveau texte
  useEffect(() => {
    if (textError) setTextError(null);
  }, [title, date, description, timeStart, timeEnd, ticket, seats, place]);

  // ETAT rendu conditionnel en fonction de l'event
  const [transport, setTransport] = useState(event.category && event.category.includes("travel"));
  const [activity, setActivity] = useState(event.category && event.category === "activity");

  // Gestion de la selection du mode de transport
  const listSelection = [
    { key: "car", value: "Voiture" },
    { key: "train", value: "Train" },
    { key: "plane", value: "Avion" },
  ];
  // Si on édite un transport, on récupère la key du transport depuis event.category
  const initialTransport = event.category && event.category.includes("travel") && event.category.slice(7);
  // On défini le state du transport avec la valeur retournée, ou vide si ce n'est pas un trajet ou que c'est un nouvel event
  const [transportSelected, setTransportSelected] = useState(initialTransport ?? "");
  // On défini le défaultValue pour la selectionList
  const initialObject = initialTransport ? listSelection.find((e) => e.key === transportSelected) : undefined;
  //console.log(initialObject);
  let iconTransport = <SvgCar style={{ alignSelf: "center" }} width={30} height={30} fill={GLOBAL_COLOR.QUATERNARY} />;
  if (transportSelected === "train")
    iconTransport = <SvgTrain style={{ alignSelf: "center" }} width={30} height={30} fill={GLOBAL_COLOR.QUATERNARY} />;
  if (transportSelected === "plane")
    iconTransport = <SvgPlane style={{ alignSelf: "center" }} width={30} height={30} fill={GLOBAL_COLOR.QUATERNARY} />;

  // 3. Functions

  // Gestion des states des inputs
  const handleInputChange = (name, value) => {
    if (name === "title") setTitle(value);
    else if (name === "date") handleDateChange(value);
    else if (name === "timeStart") handleTimeChange(value, "start");
    else if (name === "timeEnd") handleTimeChange(value, "end");
    else if (name === "place") setPlace(value);
    else if (name === "description") setDescription(value);
    else if (name === "ticket") setTicket(value);
    else if (name === "seats") setSeats(value);
  };

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Fonction pour gérer les changements de texte dans le champ de saisie de la date
  const handleDateChange = (text) => {
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
    name === "start" && setTimeStart(formattedTime);
    name === "end" && setTimeEnd(formattedTime);
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
    if (
      // On vérifie les champs de base ainsi que si l'utilisateur a coché un transport ou une activité
      !title ||
      !date ||
      (!transportSelected && !activity) ||
      !description ||
      !timeStart ||
      !description ||
      !place ||
      // Si c'est un transport, on vérifie ensuite une heure d'arrivée
      (transportSelected && !timeEnd)
    ) {
      console.log("Tous les champs doivent être remplis.");
      setModalLoadingVisible(false);
      setTextError("Formulaire incomplet");
      return;
    }

    // On renseigne les infos dates et heures en format date pour l'enregistrement
    const dateSave = parse(`${date} Z`, "dd'/'MM'/'yyyy X", new Date());
    const timeStartSave = parse(`${date}-${timeStart} Z`, "dd'/'MM'/'yyyy'-'HH':'m X", new Date());
    const timeEndSave = transport ? parse(`${date}-${timeEnd} Z`, "dd'/'MM'/'yyyy'-'HH':'m X", new Date()) : null;
    // console.log(dateSave, timeStartSave, timeEndSave);

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
    if (activity) categorySave = "activity";
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
      tokenTrip: event.tokenTrip,
      tokenEvent: event.tokenEvent ?? null,
      category: categorySave,
      name: title,
      date: dateSave,
      timeStart: timeStartSave,
      timeEnd: timeEndSave,
      place,
      seats: seatsSave,
      ticket,
      description,
    };

    try {
      const response = await fetch(`${BACK_URL}/events/`, {
        method: event.tokenEvent ? "PUT" : "POST", // Si on a deja un tokenEvent on sait qu'il faut seulement mettre à jour
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: user.token, event: eventData }),
      });

      const responseData = await response.json();
      // console.log("Réponse du serveur:", responseData);

      if (responseData.result) {
        // On sauvegarde le retour dans le reducer, en faisant un update si c'est un mise à jour, ou un ajout si c'est un nouveau
        if (event.tokenEvent) {
          dispatch(updateEvent(responseData.event));
          // Redirigez l'utilisateur vers EventScreen si la réponse du backend est true
          await navigation.goBack();
        } else {
          dispatch(addEvent(responseData.event));
          // Redirigez l'utilisateur vers EventScreen si la réponse du backend est true
          await navigation.navigate("Event", {
            screen: "Event",
            tokenEvent: responseData.event.tokenEvent,
            isNew: true,
          });
        }
        setModalLoadingVisible(false);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'event au serveur :", error);
      setModalLoadingVisible(false);
      setTextError("Erreur de connexion au serveur");
    }
  }

  // 4. Return Component
  return (
    <>
      <StatusBar translucent={false} backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <LoadingModal visible={modalLoadingVisible} />
      <SafeAreaView style={styles.screen}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav
            title={event.tokenEvent ? "Mettre à jour l'événement" : "Nouvel événement"}
            navigation={navigation}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} >
            <ScrollView style={styles.content}>
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
                  <TouchableOpacity
                    style={[styles.bubble, { opacity: transport ? 1 : 0.5 }]}
                    onPress={handleTransportPress}
                  >
                    {iconTransport}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.bubble, { opacity: activity ? 1 : 0.5 }]}
                    onPress={handleActivityPress}
                  >
                    <SvgPeople style={{ alignSelf: "center" }} width={30} height={30} fill={GLOBAL_COLOR.QUATERNARY} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[globalsStyles.lines, { alignSelf: "center" }]} />
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
                        setSelected={(key) => setTransportSelected(key)}
                        save="key"
                        placeholder="Choisir un moyen de transport"
                        search={false}
                        boxStyles={styles.insideList}
                        dropdownStyles={styles.insideList}
                        inputStyles={styles.textList}
                        defaultOption={initialObject}
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
                          type="numeric"
                          placeholder="Places disponibles"
                          onInputChange={handleInputChange}
                          value={seats.toString()}
                          maxLength={2}
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
              <Text style={styles.textError}>{textError}</Text>
              <TouchableOpacity style={styles.btnSave} onPress={() => handleAddEvent()}>
                <Text style={styles.textSave}>Enregistrer</Text>
              </TouchableOpacity>
              <View style={styles.space} />
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
