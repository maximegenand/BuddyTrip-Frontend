import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
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
    body: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 20,
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
        margin: 20,
    },
});
