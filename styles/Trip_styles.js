import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { colors } from '../styles/Global'

const styles = StyleSheet.create({
    container : {
       width:  Dimensions.get('window').width,
       height:  Dimensions.get('window').height,
       backgroundColor : colors.background_beige
    },
    day : {
        width : Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: colors.button,
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 10,
    },
    calendrier : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        margin : 10
    },
    jour: {
        color: colors.background_beige,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    date : {
        color: colors.background_beige,
    },
    fleche_left : {
        width: Dimensions.get('window').width * 0.16,
        height: Dimensions.get('window').height * 0.08,
        borderRadius: 70,
        backgroundColor: colors.button,
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center'
    },
    planning : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export { styles };