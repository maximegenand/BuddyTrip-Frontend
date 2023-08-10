import { NativeModules, Platform, StyleSheet } from 'react-native';
const {StatusBarManager} = NativeModules;

// On récupère la hauteur de la statusBar (20px par défaut pour IOS)
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

// Couleurs globales de l'app
const GLOBAL_COLOR = {
    PRIMARY : '#e67451',
    SECONDARY: '#eb834a',
    TERTIARY : '#fdf2ec',
    QUATERNARY : '#fba70e',
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
    },
    lines: {
        width : '80%',
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: GLOBAL_COLOR.PRIMARY,
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },
});


export { globalsStyles, GLOBAL_COLOR, STATUSBAR_HEIGHT };
