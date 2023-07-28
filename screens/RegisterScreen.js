import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { globalStyles, colors } from '../styles/Global';
import { styles } from '../styles/Register_styles'

export default function RegisterScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AllTrips')}>
        <Text>RegisterScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
