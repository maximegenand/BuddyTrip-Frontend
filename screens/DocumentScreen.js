import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import globalStyles from '../GlobalCss'

export default function DocumentScreen() {
    return (
    <View style={globalStyles.container}>
        <TouchableOpacity>
            <Text>DocumentScreen</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

});
