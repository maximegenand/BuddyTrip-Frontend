import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/Global'
import { styles } from '../styles/Event_styles'

export default function EventScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>EventScreen</Text>
        </TouchableOpacity>
    </View>
    );
}
