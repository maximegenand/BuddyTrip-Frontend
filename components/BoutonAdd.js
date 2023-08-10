import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import SvgAdd from "./svg/SvgAdd";
export default function BoutonAdd(props) {

  return (
    <TouchableOpacity  style={[styles.container, props.buttonStyle]} onPress={props.onPress}>
      <View style={styles.innerCircle} />
      <View style={styles.innerCircle2} />
      <SvgAdd style={{ alignSelf: "center" }} width={40} height={40} fill={GLOBAL_COLOR.TERTIARY} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container : {
      width: 90,
      height: 90,
      borderRadius: 100,
      backgroundColor: GLOBAL_COLOR.QUATERNARY,
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
      backgroundColor: GLOBAL_COLOR.QUATERNARY,
      position: "absolute",
    },
    plus: {
      fontWeight: 'bold',
      fontSize: 50,
      color: GLOBAL_COLOR.TERTIARY,
      position: "absolute",
    },
});
