import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20%',
    },
    input :{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // height: '30%',
        width: '100%',
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        fontStyle: 'italic',
    },
    forms: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dates: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textmain: {
        fontWeight: "bold",
        fontSize: 20,
    },
    descriptionLabel: {
        fontWeight: "bold",
        fontSize: 20,
    },
    descriptionInput:{
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