import { StyleSheet, Dimensions } from 'react-native';
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    screen: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
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
    inputName :{
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
        width: '100%',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: 'white',
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
    },
    textmain: {
        fontWeight: "bold",
        fontSize: 20,
    },
    btnDate: {
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textBtnDate: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
    },
    description: {
        display: 'flex',
        height: '15%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    descriptionLabel: {
        fontWeight: "bold",
        fontSize: 20,
    },
    descriptionInput: {
        width: '100%',
        maxHeight: 60,
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
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