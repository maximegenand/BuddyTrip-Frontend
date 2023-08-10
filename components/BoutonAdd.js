import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
export default function BoutonAdd(props) {

  return (
    <TouchableOpacity  style={[styles.container, props.buttonStyle]} onPress={props.onPress}>
      <View style={styles.innerCircle} />
      <View style={styles.innerCircle2} />
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container : {
      width: 90,
      height: 90,
      borderRadius: 100,
      backgroundColor: GLOBAL_COLOR.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      width: 85,
      height: 85,
      borderRadius: 100,
      backgroundColor: GLOBAL_COLOR.TERTIARY,
      position: "absolute",
    },
    innerCircle2: {
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: GLOBAL_COLOR.PRIMARY,
      position: "absolute",
    },
    plus: {
      fontWeight: 'bold',
      fontSize: 50,
      color: GLOBAL_COLOR.TERTIARY,
      position: "absolute",
    },
});
