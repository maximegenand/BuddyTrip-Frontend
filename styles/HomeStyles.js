import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
import { FontDisplay } from 'expo-font';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 67,
        paddingHorizontal: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        marginLeft: 5,
        color: GLOBAL_COLOR.TERTIARY,
        fontSize: 26,
        fontFamily: 'Montserrat-Alternates-SemiBold-Italic',       
    },
    userContainer: {
        width: 45,
        height: 45,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        borderRadius: 25,
    },

    listTrips: {
        alignItems: 'center',
        width: '100%',
    },
    tripContainer: {
        width: '90%',

        marginVertical: 20,
        padding: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        borderRadius: 10,
    },
    tripTitle: {
        textAlign: 'center',
        color: GLOBAL_COLOR.TERTIARY,
        fontSize: 22,
    },
    tripSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tripParticipants: {
        color: GLOBAL_COLOR.TERTIARY
    },
    tripDate: {
        color: GLOBAL_COLOR.TERTIARY
    },
    add: {
        marginTop: 4,
        marginBottom: 20,
        alignItems: 'center',
    },
    scrollContainer : {
        flex: 1,
        width: '100%'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'transparent',
    },
    modalContent: {
        width: '80%',
        height: '25%',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOR.SECONDARY,
        padding: 10
    },
    titleModalContainer: {
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle : {
        color: GLOBAL_COLOR.SECONDARY,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    removeButton: {
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        padding: 10,
        borderRadius: 10
    },
    removeButtonText : {
        color: GLOBAL_COLOR.TERTIARY
    }
});
