import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import globalStyles from '../GlobalCss'

export default function AllTripsScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Trip')}>
            <Text>AllTripsScreen</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

});
