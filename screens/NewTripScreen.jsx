import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Button,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderNav from "../components/HeaderNewTrip";
import DatePickerAll from "../components/DatePicker";
import { BACK_URL } from "@env";

// Import styles
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [textError, setTextError] = useState("");

  const userToken = useSelector((state) => state.user.value.token);

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };


  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");

// Fonction pour formater le texte de la date
const formatDate = (text) => {
  // Supprimer tous les caractères non numériques de la chaîne de texte
  const cleanedText = text.replace(/[^0-9]/g, "");

  // Appliquer le format "DD/MM/YYYY" jusqu'à 8 caractères
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


// Fonction pour gérer les changements de texte dans le champ de saisie de la date de début
const handleStartDateChange = (text) => {
  // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
  const formattedDate = formatDate(text);

  // Vérifier si la date est valide (longueur maximale de 10 caractères)
  if (formattedDate.length <= 10) {
    // Mettre à jour l'état startDateText avec la date formatée
    setStartDateText(formattedDate);

    // Mise à jour de l'état startDate en convertissant formattedDate en objet Date
    const [day, month, year] = formattedDate.split("/");
    const parsedDate = new Date(`${year}-${month}-${day}`);
    setStartDate(parsedDate);
  }
};

// Fonction pour gérer les changements de texte dans le champ de saisie de la date de fin
const handleEndDateChange = (text) => {
  // Formater le texte de la date pour qu'il ait le format "JJ/MM/AAAA"
  const formattedDate = formatDate(text);

  // Vérifier si la date est valide (longueur maximale de 10 caractères)
  if (formattedDate.length <= 10) {
    // Mettre à jour l'état endDateText avec la date formatée
    setEndDateText(formattedDate);

    // Mise à jour de l'état endDate en convertissant formattedDate en objet Date
    const [day, month, year] = formattedDate.split("/");
    const parsedDate = new Date(`${year}-${month}-${day}`);
    setEndDate(parsedDate);
  }
};


// Fonction pour créer un nouveau groupe de voyage
async function handleAddTrip() {
  try {

    // Récupérer le token de l'utilisateur connecté
    const token = userToken;

    // Vérifie que tous les champs de l'objet sont non vides
    if (!groupName || !startDate || !endDate || !description) {
      console.log("Tous les champs doivent être remplis.");
      setTextError("Tous les champs doivent être remplis");
      return;
    }

    // Vérifier que la date de fin est supérieure à la date de début
    if (endDate <= startDate) {
      console.log("La date de fin doit être supérieure à la date de début.");
      setTextError("La date de fin doit être supérieure à la date de début");
      return;
    }

    // Création de l'objet tripData avec les champs non vides
    const tripData = {
      name: groupName,
      dateStart: startDate,
      dateEnd: endDate,
      description: description,
      participants: [],
    };

    // Envoyer la demande de création du voyage au serveur via une requête POST
    const response = await fetch(`${BACK_URL}/trips/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token, trip: tripData }),
    });

    // Attendre la réponse du serveur et la traiter comme JSON
    const responseData = await response.json();
    console.log("Réponse du serveur:", responseData);

    // Si la réponse du backend est true, rediriger l'utilisateur vers HomeScreen
    if (responseData.result === true) {
      navigation.navigate("Home");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du voyage au serveur :", error);
  }
}


  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav navigation={navigation} />
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.textmain}>Nom du Groupe : {groupName}</Text>
              <TextInput
                style={styles.input}
                placeholder="Nom du Groupe"
                onChangeText={setGroupName}
                value={groupName}
              />
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
