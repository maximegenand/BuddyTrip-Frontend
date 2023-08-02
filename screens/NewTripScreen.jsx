import { View, Text, TextInput, TouchableOpacity, Platform, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import HeaderNav from "../components/HeaderNewTrip";
import DatePickerAll from "../components/DatePicker";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [groupName, setGroupName] = useState("");
  // let datePicker = <DatePickerIOS/>
  // if(Platform.OS === 'android') datePicker = <DatePickerAndroid/>

  function handleAddTrip() {
    // Perform the action you want with the selected start date, end date, and group name
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Group Name:", groupName);
    // Add your logic here to perform any further actions or navigation
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav navigation={navigation} />
      <View style={styles.content}>
        <View>
          <TextInput style={styles.input} placeholder="Nom du Groupe" onChangeText={setGroupName} value={groupName}/>
        </View>
        <View style={styles.dates}>
          <View style={styles.form}>
            <Text style={styles.textmain}>Début</Text>
            {isDatePickerOpen && <DatePickerAll value={startDate} onChange={setStartDate}/>}
            <Button title="Choose start date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
          <View style={styles.form}>
            <Text style={styles.textmain}>Fin</Text>
            {isDatePickerOpen && <DatePickerAll value={endDate} onChange={setEndDate} />}
            <Button title="Choose end date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={handleAddTrip}>
          <Text style={styles.btnText}>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
