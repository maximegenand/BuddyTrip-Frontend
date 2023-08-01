import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
    },
    input :{
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 15, // Ajouter un espace intérieur horizontal pour améliorer l'apparence
        paddingVertical: 5,
        fontStyle: 'italic',
    },
    forms :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dates:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textmain :{
        fontWeight: "bold",
        fontSize: 20,
    },
    btnAdd: {
        fontSize: 20,

    }
})