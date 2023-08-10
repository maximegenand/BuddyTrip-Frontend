import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
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
    header : {
        height: 60,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    calendarContainer: {
        width: '100%',
    },
    calendarBackground: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,

    },
    flecheLeft : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 70,
        height: 70,
        padding: 10,
        //borderRadius: 25,
        //backgroundColor: 'red',
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 }, // Ajustez l'offset souhaité
        // shadowOpacity: 0.4, // Ajustez l'opacité souhaitée
        // shadowRadius: 3, // Ajustez le rayon de l'ombre souhaité
        // elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
    dateContainer: {
        //height: screenHeight * 0.1,
        //backgroundColor: GLOBAL_COLOR.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        //borderRadius: 10,
    },
    day: {
        color: GLOBAL_COLOR.PRIMARY,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    date : {
        color: GLOBAL_COLOR.PRIMARY,
    },
    flecheRight: {
        flex: 1,
        justifyContent: 'center',
        width: 70,
        height: 70,
        padding: 10,
        //backgroundColor: 'red',
    },
    events : {
        overflow :'scroll',
        paddingHorizontal: "5%",
    },
    boutonAdd: {
        bottom: 10,
        shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
        shadowOpacity: 0.4, // Ajustez l'opacité souhaitée
        shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
        elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
});
