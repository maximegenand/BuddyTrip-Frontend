import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/Global'
import { styles } from '../styles/Profil_styles'

export default function ProfilScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>ProfilScreen</Text>
        </TouchableOpacity>
    </View>
    );
}