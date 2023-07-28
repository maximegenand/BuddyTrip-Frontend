import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { globalStyles } from '../styles/Global'
import { styles } from '../styles/Chat_styles'

export default function ChatScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>ChatScreen</Text>
        </TouchableOpacity>
    </View>
    );
}
