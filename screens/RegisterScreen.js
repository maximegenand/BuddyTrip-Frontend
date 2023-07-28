import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import globalStyles from '../GlobalCss'


export default function RegisterScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Text>RegisterScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  }
});