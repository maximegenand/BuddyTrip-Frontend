import { View, Text, TextInput, TouchableOpacity, Platform, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import HeaderNav from "../components/HeaderNewTrip";
import DatePickerAll from "../components/DatePicker";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  // let datePicker = <DatePickerIOS/>
  // if(Platform.OS === 'android') datePicker = <DatePickerAndroid/>

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav navigation={navigation} />
      <View style={styles.content}>
        <View>
          <TextInput style={styles.input} placeholder="Nom du Groupe" />
        </View>
        <View style={styles.dates}>
          <View style={styles.form}>
            <Text style={styles.textmain}>Début</Text>
            {isDatePickerOpen && <DatePickerAll />}
            <Button title="Choose end date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
          <View style={styles.form}>
            <Text style={styles.textmain}>Fin</Text>
            {isDatePickerOpen && <DatePickerAll />}
            <Button title="Choose end date" onPress={() => setIsDatePickerOpen(!isDatePickerOpen)} />
          </View>
        </View>
        <TouchableOpacity style={styles.btnAdd}>
          <Text>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
