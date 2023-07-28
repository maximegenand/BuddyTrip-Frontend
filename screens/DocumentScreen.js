import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/Global'
import { styles } from '../styles/Document_styles'

export default function DocumentScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>DocumentScreen</Text>
        </TouchableOpacity>
    </View>
    );
}
