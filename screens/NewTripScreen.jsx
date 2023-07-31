import { View, Text, TextInput, TouchableOpacity, StatusBar, Platform } from "react-native";
import HeaderNav from "../components/HeaderNewTrip";
import DatePicker from "react-native-datepicker";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewTripStyles";

export default function NewTripScreen({ navigation }) {
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [tripName, setTripName] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <HeaderNav />
      <View style={styles.forms}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={tripName}
            onChangeText={(text) => setTripName(text)}
          />
        </View>
        <View style={styles.form}>
          <DatePicker
            style={styles.datePicker}
            date={selectedDate1}
            mode="date"
            placeholder="Select date 1"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: "flex-start",
                paddingLeft: Platform.OS === "ios" ? 4 : 0,
              },
              dateText: {
                fontSize: 16,
                color: "#000",
              },
            }}
            onDateChange={(date) => setSelectedDate1(date)}
          />
        </View>
        <View style={styles.form}>
          <DatePicker
            style={styles.datePicker}
            date={selectedDate2}
            mode="date"
            placeholder="Select date 2"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: "flex-start",
                paddingLeft: Platform.OS === "ios" ? 4 : 0,
              },
              dateText: {
                fontSize: 16,
                color: "#000",
              },
            }}
            onDateChange={(date) => setSelectedDate2(date)}
          />
        </View>
        <TouchableOpacity>
          <Text>Add Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
