import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "../styles/Global";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TripScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.date}>
          <Text style={styles.hour}>13H00</Text>
          <FontAwesome name="car" size={30} color={colors.background_beige} />
          <Text style={styles.hour}>18H00</Text>
        </View>
        <View style={styles.ou}>
          <Text style={styles.name}>Twingo Travel !</Text>
          <Text style={styles.participants}>5 participants : Maxime, Adrien ...</Text>
        </View>
        <Text style={styles.createur}>Rayenne</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.14,
    backgroundColor : colors.background_orange,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  date : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  hour : {
    color: colors.background_beige
  },
  name : {
    color: colors.background_beige,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  participants : {
    color: colors.background_beige
  },
  ou : {
    displai: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  createur : {
    color: colors.background_beige,
    marginBottom : 50
  }
});
