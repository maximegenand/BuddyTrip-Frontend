import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');
import { colors } from "../styles/Global";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TripScreen() {
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
      backgroundColor: colors.button,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plus: {
      fontWeight: 'bold',
      fontSize: 50,
      color: colors.background_beige
    },
});
