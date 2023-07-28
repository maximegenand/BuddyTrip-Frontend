import React from "react";
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/Global'
import { styles } from "../styles/AllTrips_styles";

export default function AllTripsScreen({ navigation }) {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
            <Text>AllTripsScreen</Text>
        </TouchableOpacity>
    </View>
    );
}
