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
        width : screenWidth,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        height : screenHeight * 0.79,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    calendrierEvent : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position :'relative'
    },
    events : {
        overflow :'scroll',
    },
    modalContainer : {
        width: '80%',
        height: '70%',
        backgroundColor: GLOBAL_COLOR.SECONDARY,
        borderRadius: 10,
        position: 'absolute',
        top: '15%', // 50% - (70% / 2)
        left: '10%', // 50% - (80% / 2)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    modalTitle: {
        fontWeight: 'bold',
        color: GLOBAL_COLOR.SECONDARY,
    },
    bulleModal : {
        alignItems: 'center',
        backgroundColor : GLOBAL_COLOR.TERTIARY,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        margin : 10
    },
    boutonAdd: {
        marginBottom: screenHeight / 11
    },
});
