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
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '10%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor : GLOBAL_COLOR.SECONDARY,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        fontSize: 15,
        width : screenWidth * 0.8,
        height : screenHeight * 0.06,
        borderRadius: 5,
    },
    dates: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    textmain: {
        fontWeight: "bold",
        fontSize: 20,
        color: GLOBAL_COLOR.TERTIARY,
    },
    descriptionInput: {
        borderBottomWidth: 1,
        borderBottomColor : GLOBAL_COLOR.SECONDARY,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        fontSize: 15,
        width : screenWidth * 0.8,
        height : screenHeight * 0.06,
        borderRadius: 5,
    },
    btnAdd: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        height: '10%',
        width: '100%',
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color:'white',
    }
})