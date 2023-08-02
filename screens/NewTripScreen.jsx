import { View, Text, TextInput, TouchableOpacity, Platform, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import { useSelector } from 'react-redux';
import HeaderNav from "../components/HeaderNewTrip";
import DatePickerAll from "../components/DatePicker";
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const userToken = useSelector((state) => state.user.value.token);
  // let datePicker = <DatePickerIOS/>
  // if(Platform.OS === 'android') datePicker = <DatePickerAndroid/>

  // fonction handleAddTripp pour créer un nouveau groupe
  async function handleAddTrip() {
    try {
      // création de la donnée à envoyer au backend
      const token = userToken;
      const tripData = {
        name: groupName,
        dateStart: startDate,
        dateEnd: endDate,
        description: description,
      }

      const response = await fetch(`${BACK_URL}/trips`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token: token, trip: tripData}),
      });

      const responseData = await response.json();
      console.log("Réponse du serveur:", responseData);

      if (responseData.result === true) {
        // Redirigez l'utilisateur vers HomeScreen si la réponse du backend est true
        navigation.navigate('HomeScreen');
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi du voyage au serveur :", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav navigation={navigation} />
      <View style={styles.content}>
        <View>
          <TextInput style={styles.input} placeholder="Nom du Groupe" onChangeText={setGroupName} value={groupName} />
        </View>
        <View style={styles.dates}>
          <View style={styles.form}>
            <Text style={styles.textmain}>Début</Text>
            {isDatePickerOpen && <DatePickerAll value={startDate} onChange={setStartDate} />}
            <Button title="Choose start date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
          <View style={styles.form}>
            <Text style={styles.textmain}>Fin</Text>
            {isDatePickerOpen && <DatePickerAll value={endDate} onChange={setEndDate} />}
            <Button title="Choose end date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionLabel}>Description du voyage :</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Saisissez la description de votre voyage ici..."
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4} // Vous pouvez ajuster le nombre de lignes affichées
          />
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={handleAddTrip}>
          <Text style={styles.btnText}>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
