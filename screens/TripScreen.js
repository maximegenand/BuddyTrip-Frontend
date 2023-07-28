import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { globalStyles } from '../styles/Global'
import { styles } from '../styles/Trip_styles'

export default function TripScreen() {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <Text>TripScreen</Text>
      </TouchableOpacity>
    </View>
  );
}