import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';

export default function BoutonAdd() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container : {
      width: 90,
      height: 90,
      borderRadius: '50%',
      backgroundColor: GLOBAL_COLOR.PRIMARY,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plus: {
      fontWeight: 'bold',
      fontSize: 50,
      color: GLOBAL_COLOR.TERTIARY,
    },
});
