import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  Modal,
  ActivityIndicator,
} from "react-native";
import { BACK_URL } from "@env";

// Import styles
import styles from "../styles/NewTripStyles";

//Import components
import HeaderNav from "../components/HeaderNewTrip";
import AddBuddyTrip from "../components/AddBuddyTrip";
import InputComponent from "../components/Input";

//Import modules
import { formatDate } from "../modules/formatDate";
import { isValidDate } from "../modules/isValidDate";

// Import redux
import { useSelector, useDispatch } from "react-redux";
import { addTrip } from "../redux/reducers/trips";


export default function NewTripScreen({ navigation }) {

// 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();


// 2. UseEffect, UseState, UseRef

  // Gère l'affichage de la modale
  const [modalBuddyVisible, setModalBuddyVisible] = useState(false);
  const [buddiesSelected, setBuddiesSelected] = useState([]);

  // États pour gérer les valeurs des champs
  const [tripName, setTripName] = useState("");
  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState("");

  // On récupère les tokenUser de tous utilisateurs au chargement de la page
  const [ dataUsers, setDataUsers ] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const fetchUsers = await fetch(`${BACK_URL}/users/list?token=${user.token}`);
        const data = await fetchUsers.json();
        // On traite les données pour l'envoyer au format necessaire à la liste des buddies
        const dataMap = data.users.map(obj => {
          return {key: obj.tokenUser, value: `${obj.username} - ${obj.email}`, selected: true}
        })
        setDataUsers(dataMap)
      } catch(error) {
        console.error("Erreur lors de la connexion au serveur :", error);
      }
    })().catch(err => {
      console.error("Unhandled promise rejection:", err);
    });
  }, [])


// 3. Functions

  // Gestion des states des inputs
  const handleInputChange = (name, value) => {
    if (name === 'name') setTripName(value);
    else if (name === 'dateStart') handleDateChange(value, 'start');
    else if (name === 'dateEnd') handleDateChange(value, 'end');
    else if (name === 'description') setDescription(value);
  }

  // Fonction qui gère l'affichage ou non de la modale des buddies
  const handleModal = () => {
    setModalBuddyVisible(!modalBuddyVisible);
    console.log(buddiesSelected)
  }

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Fonction pour gérer les changements de texte dans le champ de saisie de la date de début
  const handleDateChange = (text, name) => {
    // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
    const formattedDate = formatDate(text);
    // Mettre à jour l'état startDateText avec la date formatée
    name === 'start' && setStartDateText(formattedDate);
    name === 'end' && setEndDateText(formattedDate);
  };

  // Fonction pour créer un nouveau groupe de voyage
  async function handleAddTrip() {
    try {

      // Vérifier que tous les champs de l'objet sont non vides
      if (!tripName || !startDateText || !endDateText || !description) {
        console.log("Tous les champs doivent être remplis.");
        setTextError("Tous les champs doivent être remplis");
        return;
      }

      // Vérifier la validité de la date de début
      if (!isValidDate(startDateText)) {
        console.log("La date de début est invalide.");
        setTextError("Date de début invalide");
        return;
      }

      // Vérifier la validité de la date de fin
      if (!isValidDate(endDateText)) {
        console.log("La date de fin est invalide.");
        setTextError("Date de fin invalide");
        return;
      }

      // Mise à jour de l'état startDate ou endDate en convertissant la date formatée en objet Date
      const [startDay, startMonth, startYear] = startDateText.split("/");
      const parsedStartDate = new Date(`${startYear}-${startMonth}-${startDay}`);

      const [endDay, endMonth, endYear] = endDateText.split("/");
      const parsedEndDate = new Date(`${endYear}-${endMonth}-${endDay}`);

      // Vérifier que la date de fin est supérieure à la date de début
      if (parsedEndDate <= parsedStartDate) {
        console.log("La date de fin doit être supérieure à la date de début.");
        setTextError("La date de fin doit être supérieure à la date de début");
        return;
      }

      // Création de l'objet tripData avec les champs non vides
      const tripData = {
        name: tripName,
        dateStart: parsedStartDate,
        dateEnd: parsedEndDate,
        description: description,
        participants: buddiesSelected,
      };

      // Envoyer la demande de création du voyage au serveur via une requête POST
      const response = await fetch(`${BACK_URL}/trips/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: user.token, trip: tripData }),
      });

      // Attendre la réponse du serveur et la traiter comme JSON
      const responseData = await response.json();
      console.log("Réponse du serveur:", responseData);

      // Si la réponse du backend est true, rediriger l'utilisateur vers HomeScreen
      if (responseData.result === true) {
        dispatch(addTrip(responseData.trip));
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du voyage au serveur :", error);
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <AddBuddyTrip modalVisible={modalBuddyVisible} data={dataUsers} setBuddiesSelected={setBuddiesSelected} buddiesSelected={buddiesSelected} handleModal={handleModal} />
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav navigation={navigation} />
          <View style={styles.content}>
            <InputComponent
              key="name"
              name="name"
              placeholder="Nom du groupe"
              onInputChange={handleInputChange}
              value={tripName}
            />
            <InputComponent
              key="dateStart"
              name="dateStart"
              type="date"
              placeholder="Date de début (JJ/MM/AAAA)"
              onInputChange={handleInputChange}
              value={startDateText}
            />
            <InputComponent
              key="dateEnd"
              name="dateEnd"
              type="date"
              placeholder="Date de fin(JJ/MM/AAAA)"
              onInputChange={handleInputChange}
              value={endDateText}
            />
            <InputComponent
              key="description"
              name="description"
              type="description"
              placeholder="Description du voyage"
              onInputChange={handleInputChange}
              value={description}
            />
            
{/*
            <View style={styles.form}>
              <Text style={styles.textmain}>Nom du Trip : {tripName}</Text>
              <TextInput style={styles.input} placeholder="Nom du Groupe" onChangeText={setTripName} value={tripName} />
            </View>
            <View style={styles.form}>
              <Text style={styles.textmain}>Date de début : {startDateText}</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez une date (JJ/MM/AAAA)"
                value={startDateText}
                onChangeText={handleStartDateChange}
                maxLength={10}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.textmain}>Date de fin : {endDateText}</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez une date (JJ/MM/AAAA)"
                value={endDateText}
                onChangeText={handleEndDateChange}
                maxLength={10}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.textmain}>Description du voyage :</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Saisissez la description de votre voyage ici..."
                value={description}
                multiline={true}
                onChangeText={setDescription}
              />
  </View> */}
            <TouchableOpacity onPress={handleModal}><Text style={{fontSize: 20, fontWeight: '700', paddingBottom: 20}}>Ajouter des buddies</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnAdd} onPress={handleAddTrip}>
              <Text style={styles.btnText}>Add Trip</Text>
            </TouchableOpacity>
            <Text style={styles.textError}>{textError}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
