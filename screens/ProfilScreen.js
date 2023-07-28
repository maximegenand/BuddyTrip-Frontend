import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import globalStyles from '../GlobalCss'

export default function ProfilScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>ProfilScreen</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

});
