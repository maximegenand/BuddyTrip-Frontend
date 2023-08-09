import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header : {
        height: 60,
    },
    day: {
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
    events : {
        overflow :'scroll',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalInner : {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
        borderRadius: 10,
    },
    modalIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        borderRadius: 25,
    },
    modalTitle: {
        fontWeight: 'bold',
        color: GLOBAL_COLOR.SECONDARY,
    },
    modalBubble : {
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        padding: 10,
        backgroundColor : GLOBAL_COLOR.TERTIARY,
        borderRadius: 10,
    },
    boutonAdd: {
        bottom: screenHeight * 0.04,
    },
});
