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
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTrip } from "../redux/reducers/trips";
import HeaderNav from "../components/HeaderNewTrip";
import { BACK_URL } from "@env";

// Import styles
import styles from "../styles/NewTripStyles";

import AddBuddyTrip from "../components/AddBuddyTrip";

export default function NewTripScreen({ navigation }) {

  // Gère l'affichage de la modale
  const [modalBuddyVisible, setModalBuddyVisible] = useState(false);
  const [buddiesSelected, setBuddiesSelected] = useState([]);

  // États pour gérer les valeurs des champs
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState("");

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModalBuddyVisible(!modalBuddyVisible);
    console.log(buddiesSelected)
  }

  // On récupère les tokenUser des utilisateurs au chargement de la page
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

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Fonction pour gérer les changements de texte dans le champ de saisie de la date de début
  const handleStartDateChange = (text) => {
    // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
    const formattedDate = formatDate(text);

    // Mettre à jour l'état startDateText avec la date formatée
    setStartDateText(formattedDate);
  };

  // Fonction pour gérer les changements de texte dans le champ de saisie de la date de fin
  const handleEndDateChange = (text) => {
    // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
    const formattedDate = formatDate(text);

    // Mettre à jour l'état endDateText avec la date formatée
    setEndDateText(formattedDate);
  };

  // Fonction pour formater le texte de la date
  const formatDate = (text) => {
    // Supprimer tous les caractères non numériques de la chaîne de texte
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Appliquer le format "JJ/MM/AAAA" jusqu'à 8 caractères
    if (cleanedText.length <= 2) {
      // Si la longueur est inférieure ou égale à 2, cela signifie que l'utilisateur saisit le jour (ex: "2")
      return cleanedText;
    } else if (cleanedText.length <= 4) {
      // Si la longueur est entre 3 et 4, cela signifie que l'utilisateur saisit le jour et le mois (ex: "0212" pour le 2 décembre)
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2);
      return `${day}/${month}`;
    } else {
      // Si la longueur est supérieure à 4, cela signifie que l'utilisateur saisit le jour, le mois et l'année (ex: "02122023" pour le 2 décembre 2023)
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2, 4);
      const year = cleanedText.slice(4, 8);
      return `${day}/${month}/${year}`;
    }
  };

  // Fonction pour vérifier si une date est valide et supérieure ou égale à la date d'aujourd'hui
  const isValidDate = (dateText) => {
    const cleanedDateText = dateText.replace(/[^0-9]/g, "");
    // transforme la string dans parseInt() en entier
    const day = parseInt(cleanedDateText.slice(0, 2));
    const month = parseInt(cleanedDateText.slice(2, 4));
    const year = parseInt(cleanedDateText.slice(4, 8));

    // Vérifier que l'année est supérieure ou égale à l'année courante
    const currentYear = new Date().getFullYear();
    if (year < currentYear) {
      return false;
    } else if (year === currentYear) {
      // Si l'année est égale à l'année courante, vérifier le mois et le jour
      const currentMonth = new Date().getMonth() + 1; // Les mois vont de 0 à 11 dans JavaScript, donc on ajoute 1
      if (month < currentMonth) {
        return false;
      } else if (month === currentMonth) {
        const currentDay = new Date().getDate();
        if (day < currentDay) {
          return false;
        }
      }
    }

    // Vérifier que le mois est compris entre 1 et 12
    if (month < 1 || month > 12) {
      return false;
    }
    // Vérifier que le jour est compris entre 1 et 31
    if (day < 1 || day > 31) {
      return false;
    }
    // Vérifier la validité de la date en créant un objet Date avec les valeurs
    const parsedDate = new Date(year, month - 1, day);
    //on vérifie avec isNan() si le valeur dedans n'est pas un nombre
    if (isNaN(parsedDate)) {
      return false;
    }

    return true;
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
      setStartDate(parsedStartDate);

      const [endDay, endMonth, endYear] = endDateText.split("/");
      const parsedEndDate = new Date(`${endYear}-${endMonth}-${endDay}`);
      setEndDate(parsedEndDate);

      // Vérifier que la date de fin est supérieure à la date de début
      if (parsedEndDate <= parsedStartDate) {
        console.log("La date de fin doit être supérieure à la date de début.");
        setTextError("La date de fin doit être supérieure à la date de début");
        return;
      }

      // Création de l'objet tripData avec les champs non vides
      const tripData = {
        name: tripName,
        dateStart: startDate,
        dateEnd: endDate,
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
            </View>
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
