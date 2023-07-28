import React from "react";
import {StyleSheet} from 'react-native';

const colors = {
    button : '#CC2F06',
    background_beige : '#F7DBC6',
    background_orange : '#E9671F',
}

const globalStyles = StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }
});


export { globalStyles, colors };
