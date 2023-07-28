import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import globalStyles from '../GlobalCss'

export default function TripScreen() {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity>
        <Text>TripScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
