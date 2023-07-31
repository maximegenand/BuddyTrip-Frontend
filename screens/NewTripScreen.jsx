import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import HeaderNav from "../components/HeaderNewTrip";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderNav navigation={navigation} style={styles.header}/>
      <View style={styles.forms}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={GLOBAL_COLOR.TERTIARY} />
        </View>
        <View style={styles.form}>
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
            <Text>Start Date: {startDate.toDateString()}</Text>
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleStartDateChange}
            />
          )}
        </View>
        <View style={styles.form}>
          <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
            <Text>End Date: {endDate.toDateString()}</Text>
          </TouchableOpacity>
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleEndDateChange}
            />
          )}
        </View>
        <TouchableOpacity>
          <Text>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
