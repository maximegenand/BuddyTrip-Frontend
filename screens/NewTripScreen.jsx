import { View, Text, TextInput, TouchableOpacity, Platform, SafeAreaView } from "react-native";
import HeaderNav from "../components/HeaderNewTrip";
import DatePickerAndroid from '../components/DatePickerAndroid';
import DatePickerIOS from '../components/DatePickerIOS.js'

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {

  let datePicker = <DatePickerIOS/>
	if(Platform.OS === 'android') datePicker = <DatePickerAndroid/>

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNav navigation={navigation} style={styles.header} />
      <View style={styles.forms}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={GLOBAL_COLOR.TERTIARY}
          />
        </View>
        <View style={styles.form}>
          <Text>Début</Text>
          { datePicker }
        </View>
        <View style={styles.form}>
          <Text>Fin</Text>
          { datePicker }
        </View>
        <TouchableOpacity>
          <Text>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
