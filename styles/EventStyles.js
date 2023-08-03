import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        width : screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header : {
        width : '100%',
        height: '15%',
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    fleche : {
        margin: 10,
        marginBottom: 30
    },
    ajouteur : {
        marginLeft: 10,
        color: GLOBAL_COLOR.TERTIARY
    },
    name: {
        color: GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    header_right: {
        marginLeft: 70
    },
    listBuddy : {
        width: '90%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOR.SECONDARY,
        borderRadius: 10,
        marginTop: 15,
    },
    bubbles: {
        flex: 1,
        alignItems: 'center',
    },
    body : {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    buddysWord : {
        color : GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 20
    },
    BouttonAddBuddy : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white',
        height: '100%',
        width: '20%',
        borderRadius: 10,
    },  
    BouttonPlus : {
        color: GLOBAL_COLOR.SECONDARY,
        fontWeight: 'bold',
        fontSize: 30
    },
    lines : {
        width : screenWidth * 0.8,
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: GLOBAL_COLOR.PRIMARY,
        borderBottomWidth: StyleSheet.hairlineWidth, 
    } ,
    desc : {
        maxWidth: 500,
        // wordWrap: 'break-word',
        color: GLOBAL_COLOR.SECONDARY,
        fontSize: 17,
    },
    infos : {
        marginTop: 15,
        height : '71%',
        width: '85%',
    },
    textInfos : {
        marginBottom: 5,
        fontSize: 18,
        color: GLOBAL_COLOR.SECONDARY
    },
    textInfosBold: {
        fontWeight: 'bold'
    },
    interetText : {
        fontWeight: 'bold',
        fontSize: 18,
        color: GLOBAL_COLOR.SECONDARY,
        marginBottom: 10
    },
    interetTextList : {
        fontSize: 17,
        color: GLOBAL_COLOR.SECONDARY,
        marginBottom: 10
    }
});
