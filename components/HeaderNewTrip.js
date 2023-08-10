import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from "../styles/globals";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HeaderNav({ navigation, title }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerSide} onPress={() => navigation.goBack()} activeOpacity={0.8}>
        <FontAwesome name="arrow-left" size={30} color='white' />
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerSide}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  headerSide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  headerCenter: {
    flex: 1,
    gap: 5,
    paddingHorizontal: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
  },
});
