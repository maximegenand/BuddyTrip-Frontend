import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { globalStyles, colors } from '../styles/Global'
import { styles } from '../styles/Trip_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import BoutonAdd from '../components/BoutonAdd';
import  Header  from '../components/Header';
import Event from '../components/Event'


export default function TripScreen() {
  return (
    <View style={styles.container}>
        <Header/>
    <View style={styles.planning}>
        <View style={styles.calendrier}>
            <View style={styles.fleche_left}>
        <FontAwesome name="arrow-left" size={30} color={colors.background_beige}/>
            </View>
            <View style={styles.day}>
                <Text style={styles.jour}>Aujourd'hui</Text>
                <Text style={styles.date}>23 juillet 1999</Text>
            </View>
            <View style={styles.fleche_left}>
        <FontAwesome name="arrow-right" size={30} color={colors.background_beige}/>
            </View>
        </View>
        <Event/>
    </View>
    <BoutonAdd/>
    </View>
  );
}
