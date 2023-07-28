import { StyleSheet } from 'react-native';

const GLOBAL_COLOR = {
    PRIMARY : '#cc2f06',
    SECONDARY: '#e9671f',
    TERTIARY : '#f7dbc6',
};

const globalsStyles = StyleSheet.create({
    container : {
        flex: 1,
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20,
    }
});


export { globalsStyles, GLOBAL_COLOR };
