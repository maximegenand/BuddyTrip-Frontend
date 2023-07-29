import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "../styles/Global";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TripScreen() {
  return (
    <View style={styles.header}>
      <View style={styles.header_Left}>
        <FontAwesome
          style={styles.fleche}
          name="arrow-left"
          size={30}
          color={colors.background_beige}
        />
        <View>
          <Text style={styles.name}>Rome les mecs</Text>
          <Text style={styles.buddys}>Adrien, crackito, prout, max ...</Text>
        </View>
      </View>
      <FontAwesome style={styles.bell} name="bell" size={30} color={colors.background_beige} />
    </View>
  );
}

const styles = StyleSheet.create({
    header : {
        width: screenWidth,
        height: screenHeight * 0.13,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    header_Left : {
        display: 'flex',
        flexDirection: 'row',
        marginLeft : 10
    },
    name: {
        fontWeight: 'bold',
        color: GLOBAL_COLOR.TERTIARY,
    },
    buddys : {
        color: GLOBAL_COLOR.TERTIARY,
    },
    fleche : {
        marginRight: 10
    },
    bell : {
        marginRight: 10
    },
});
