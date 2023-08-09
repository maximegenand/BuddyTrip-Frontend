import { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { BACK_URL } from "@env";

// Import styles
import styles from "../styles/NewTripStyles";
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";

//Import components
import HeaderNav from "../components/HeaderNewTrip";
import AddBuddyTrip from "../components/AddBuddyTrip";
import LoadingModal from "../components/LoadingModal";
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
  const [modalLoadingVisible, setModalLoadingVisible] = useState(false);
  const [buddiesSelected, setBuddiesSelected] = useState([]);

  // États pour gérer les valeurs des champs
  const [tripName, setTripName] = useState("");
  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState("");

  // Permet de supprimer le message d'erreur dès que l'utilisateur tape un nouveau texte
  useEffect(() => {
    if (textError) setTextError(null);
  }, [tripName, startDateText, endDateText, description])

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
    name === 'start' && setStartDateText(formattedDate);
    name === 'end' && setEndDateText(formattedDate);
  };

  // Fonction pour créer un nouveau groupe de voyage
  async function handleAddTrip() {
    // On annule l'action si la modale est affichée
    if (modalLoadingVisible) return;
    // On affiche la modale le temps du fetch
    setModalLoadingVisible(true);

    try {
      // Vérifier que tous les champs de l'objet sont non vides
      if (!tripName || !startDateText || !endDateText || !description) {
        console.log("Tous les champs doivent être remplis.");
        setModalLoadingVisible(false);
        setTextError("Formulaire incomplet");
        return;
      }

      // Vérifier la validité de la date de début
      if (!isValidDate(startDateText)) {
        console.log("La date de début est invalide.");
        setModalLoadingVisible(false);
        setTextError("Date de début invalide");
        return;
      }

      // Vérifier la validité de la date de fin
      if (!isValidDate(endDateText)) {
        console.log("La date de fin est invalide.");
        setModalLoadingVisible(false);
        setTextError("Date de fin invalide");
        return;
      }

      // Récupérer la date formaté et la convertir en objet Date
      const [startDay, startMonth, startYear] = startDateText.split("/");
      const parsedStartDate = new Date(`${startYear}-${startMonth}-${startDay}`);

      const [endDay, endMonth, endYear] = endDateText.split("/");
      const parsedEndDate = new Date(`${endYear}-${endMonth}-${endDay}`);

      // Vérifier que la date de fin est supérieure à la date de début
      if (parsedEndDate <= parsedStartDate) {
        console.log("La date de fin doit être supérieure à la date de début.");
        setModalLoadingVisible(false);
        setTextError("Date de fin < Date de début");
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
        await navigation.navigate("Home");
        setModalLoadingVisible(false);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du voyage au serveur :", error);
      setModalLoadingVisible(false);
      setTextError("Erreur de connexion au serveur");
    }
  }

  return (
    <>
      <StatusBar translucent={false} backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <LoadingModal visible={modalLoadingVisible} />
      <AddBuddyTrip modalVisible={modalBuddyVisible} data={dataUsers} setBuddiesSelected={setBuddiesSelected} buddiesSelected={buddiesSelected} handleModal={handleModal} />
      <SafeAreaView style={styles.screen}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
            <HeaderNav title="Nouveau Trip" navigation={navigation} />
            <View style={styles.content}>
              <Text style={styles.textError}>{textError}</Text>
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
                type="numeric"
                placeholder="Date de début (JJ/MM/AAAA)"
                onInputChange={handleInputChange}
                value={startDateText}
                maxLength={10}
              />
              <InputComponent
                key="dateEnd"
                name="dateEnd"
                type="numeric"
                placeholder="Date de fin (JJ/MM/AAAA)"
                onInputChange={handleInputChange}
                value={endDateText}
                maxLength={10}
              />
              <InputComponent
                key="description"
                name="description"
                type="description"
                placeholder="Description du voyage"
                onInputChange={handleInputChange}
                value={description}
              />
              <TouchableOpacity style={styles.btnBuddy} onPress={handleModal}>
                <Text style={styles.buddyText}>Sélectionner des buddies - <Text style={{fontWeight: "bold"}}>{buddiesSelected.length}/50</Text></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnAdd} onPress={handleAddTrip}>
                <Text style={styles.btnText}>Add Trip</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
