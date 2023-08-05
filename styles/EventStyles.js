import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        width : screenWidth,
        height: screenHeight,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    return: {
        alignSelf: 'flex-start',
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 20,
        overflow: 'hidden',
    },
    title: {
        marginBottom: 0,
        fontSize: 24,
        fontWeight: 'bold',
        color: GLOBAL_COLOR.TERTIARY,
    },
    titleBy: {
        fontSize: 14,
        fontStyle: 'italic',
        color: GLOBAL_COLOR.TERTIARY,
    },
    body: {
        flex: 1,
        alignItems: 'center'
    },
    buddiesContainer: {
        alignSelf: 'center',
    },
    titleBuddies: {
        position: 'relative',
        bottom: -2,
        alignSelf: 'flex-start',
        marginRight: 59,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 700,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        color: GLOBAL_COLOR.SECONDARY,
        borderColor: GLOBAL_COLOR.SECONDARY,
        borderWidth: 2,
        backgroundColor: 'white',
    },
    buddiesContent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 30,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
    },
    bubbles: {
        //flex: 1,
        flexGrow: 1,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    buttonAddBuddy : {
        position: 'relative',
        right: -1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white',
        width: 60,
        height: 60,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },  
    buddysWord : {
        color : GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 20
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
