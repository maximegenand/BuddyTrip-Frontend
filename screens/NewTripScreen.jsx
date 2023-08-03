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
  const [isDateStartPickerOpen, setIsDateStartPickerOpen] = useState(false);
  const [isDateEndPickerOpen, setIsDateEndPickerOpen] = useState(false);
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

  // Fonction pour fermer les DatePicker lorsque l'utilisateur appuie sur le champ de saisie de la description
  const handleDatePickerClose = () => {
    setIsDateEndPickerOpen(false);
    setIsDateStartPickerOpen(false);
  };

  // Fonction handleAddTripp pour créer un nouveau groupe //
  async function handleAddTrip() {
    try {
      const token = userToken;

      // Vérifie que tous les champs de l'objet sont non vides
      if (!groupName || !startDate || !endDate || !description) {
        console.log("Tous les champs doivent être remplis.");
        setTextError("Tous les champs doivent être remplis");
        return;
      }
      if (endDate <= startDate) {
        console.log("La date de fin doit être supérieure à la date de début.");
        setTextError("La date de fin doit être supérieure à la date de début");
        return;
      }
      if (!isValidDate(dateText)) {
        setDateError("Date non valide");
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

      const response = await fetch(`${BACK_URL}/trips/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token, trip: tripData }),
      });

      const responseData = await response.json();
      console.log("Réponse du serveur:", responseData);

      if (responseData.result === true) {
        // Redirigez l'utilisateur vers HomeScreen si la réponse du backend est true
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du voyage au serveur :", error);
    }
  }

  const [startDateText, setStartDateText] = useState("");
  const [endDateText, setEndDateText] = useState("");

  const isValidDate = (date) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!date.match(dateRegex)) return false;

    const [day, month, year] = date.split("/");
    const parsedDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(parsedDate.getTime())) return false;

    // Vérifier si le jour, le mois et l'année sont valides
    const maxDay = new Date(year, month, 0).getDate(); // Récupérer le dernier jour du mois
    if (parseInt(day, 10) < 1 || parseInt(day, 10) > maxDay) {
      return false;
    }

    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      return false;
    }

    return true;
  };

  const formatDate = (text) => {
    // Supprimer tous les caractères non numériques
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Appliquer le format "DD/MM/YYYY" jusqu'à 8 caractères
    if (cleanedText.length <= 2) {
      return cleanedText;
    } else if (cleanedText.length <= 4) {
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2);
      return `${day}/${month}`;
    } else {
      const day = cleanedText.slice(0, 2);
      const month = cleanedText.slice(2, 4);
      const year = cleanedText.slice(4, 8);
      return `${day}/${month}/${year}`;
    }
  };


  const handleStartDateChange = (text) => {
    const formattedDate = formatDate(text);
    if (formattedDate.length <= 10) {
      setStartDateText(formattedDate);
    }
  };

  const handleEndDateChange = (text) => {
    const formattedDate = formatDate(text);
    if (formattedDate.length <= 10) {
      setEndDateText(formattedDate);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav navigation={navigation} />
          <View style={styles.content}>
            <Text style={styles.textmain}>Nom du Groupe : {groupName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom du Groupe"
              onChangeText={setGroupName}
              value={groupName}
            />
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
                onFocus={handleDatePickerClose}
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
