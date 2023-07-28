import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import globalStyles from '../GlobalCss'

export default function EventScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>EventScreen</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

});
