import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from "../styles/globals";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HeaderNav({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.8}>
        <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
      </TouchableOpacity>
      <Text style={styles.text}>Nouveau groupe</Text>
      <Text style={styles.right}></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: screenWidth,
    height: screenHeight * 0.1,
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    color: GLOBAL_COLOR.TERTIARY,
    fontSize: 20,
  },
  buddys: {
    color: GLOBAL_COLOR.TERTIARY,
  },
  fleche: {
    padding:10,
  },
  right: {
    padding: 20,
  }
});
