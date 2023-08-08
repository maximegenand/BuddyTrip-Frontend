import { StyleSheet, Dimensions } from 'react-native';
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    screen: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
    },
    container:{
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: '10%',
        paddingBottom: 20,
    },
    textError: {
        height: 30,
        marginBottom: 10,
        textAlign: 'center',
        color: '#750000',
        fontSize: 20,
        fontWeight: 700,
        textShadowColor: 'white',
        textShadowRadius: 10,
    },
    btnBuddy: {
        alignSelf: 'center',
        marginVertical: 0,
        padding: 10,
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    buddyText: {
        fontSize: 12,
        color: 'white',
    },
    btnAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    },
})