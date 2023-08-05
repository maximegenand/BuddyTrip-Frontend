import { NativeModules, Platform, StyleSheet } from 'react-native';
const {StatusBarManager} = NativeModules;

// On récupère la hauteur de la statusBar (20px par défaut pour IOS)
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

// Couleurs globales de l'app
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


export { globalsStyles, GLOBAL_COLOR, STATUSBAR_HEIGHT };
