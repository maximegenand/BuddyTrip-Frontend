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

  const handleEndDate = (selectedDate) => {
    if(selectedDate <= startDate){
      console.log("La date de fin doit être supérieure à la date de début.");
      return;
    }
    setEndDate(selectedDate);
  }

  // //fonction pour gérer le nombre de ligne dans l'input de description
  // const handleDescriptionChange = (text) => {
  //   // Compter le nombre de lignes actuelles dans le texte
  //   const lines = text.split('\n');
  //   const lineCount = lines.length;

  //   // Si le nombre de lignes dépasse MAX_DESCRIPTION_LINES, tronquer le texte
  //   if (lineCount > 3) {
  //     const truncatedText = lines.slice(0, 3).join('\n');
  //     setDescription(truncatedText);
  //   } else {
  //     // Sinon, mettre à jour le texte normalement
  //     setDescription(text);
  //   }
  // };

  // fonction handleAddTripp pour créer un nouveau groupe
  async function handleAddTrip() {
    try {
      const token = userToken;

      // Vérifie que tous les champs de l'objet sont non vides
      if (!groupName || !startDate || !endDate || !description) {
        console.log("Tous les champs doivent être remplis.");
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

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
          <HeaderNav navigation={navigation} />
          <View style={styles.content}>
            <TextInput
              style={styles.inputName}
              placeholder="Nom du Groupe"
              onChangeText={setGroupName}
              value={groupName}
            />
            <View style={styles.dates}>
              <View style={styles.form}>
                <Text style={styles.textmain}>Début</Text>
                {isDateStartPickerOpen && <DatePickerAll value={startDate} onChange={setStartDate} />}
                <TouchableOpacity
                  style={styles.btnDate}
                  onPress={() => setIsDateStartPickerOpen(!isDateStartPickerOpen)}
                >
                  <Text style={styles.textBtnDate}>Choose Start Date</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.form}>
                <Text style={styles.textmain}>Fin</Text>
                {isDateEndPickerOpen && <DatePickerAll value={endDate} onChange={handleEndDate} />}
                <TouchableOpacity style={styles.btnDate} onPress={() => setIsDateEndPickerOpen(!isDateEndPickerOpen)}>
                  <Text style={styles.textBtnDate}>Choose End Date</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.descriptionLabel}>Description du voyage :</Text>
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
            {textError}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
