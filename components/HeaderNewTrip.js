import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from "../styles/globals";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HeaderNav({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.header_Left}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.8}>
          <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
        </TouchableOpacity>
        <Text style={styles.text}>Nouveau groupe</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header : {
      width : screenWidth,
      height : screenHeight * 0.13,
      backgroundColor : GLOBAL_COLOR.PRIMARY,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
  },
  header_Left : {
      display: 'flex',
      flexDirection: 'row',
      marginLeft : 10,
  },
  text: {
      fontWeight: 'bold',
      color: GLOBAL_COLOR.TERTIARY,
  },
  buddys : {
      color : GLOBAL_COLOR.TERTIARY,
  },
  fleche : {
      marginRight: 10,
  },
});
