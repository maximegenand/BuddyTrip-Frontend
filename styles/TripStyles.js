import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    day : {
        width: screenWidth * 0.5,
        height: screenHeight * 0.1,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    calendrier : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        margin: 10,
    },
    jour: {
        color: GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    date : {
        color: GLOBAL_COLOR.TERTIARY,
    },
    fleche_left : {
        width: screenWidth * 0.16,
        height: screenHeight * 0.08,
        borderRadius: 70,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planning : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
