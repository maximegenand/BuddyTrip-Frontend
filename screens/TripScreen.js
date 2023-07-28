import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { globalStyles, colors } from '../styles/Global'
import { styles } from '../styles/Trip_styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";

export default function TripScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.header_Left}>
            <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={colors.background_beige}/>
             <View>
                <Text style={styles.name}>Rome les mecs</Text>
                <Text style={styles.buddys}>Adrien, crackito, prout, max ...</Text>
             </View>
            </View>
             <FontAwesome style={styles.bell} name="bell" size={30} color={colors.background_beige}/>
        </View>
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
        <View style={styles.event}>
        </View>
    </View>

    </View>
  );
}