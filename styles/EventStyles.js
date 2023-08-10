import { StyleSheet, Dimensions } from 'react-native';
import { globalsStyles, GLOBAL_COLOR } from './globals';
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
        alignItems: 'center',
        flexDirection: 'column',
    },
    buddiesContainer: {
        width: "90%",
        alignSelf: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    titleBuddies: {
        position: 'relative',
        bottom: -2,
        alignSelf: 'flex-start',
        marginRight: 59,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: GLOBAL_COLOR.SECONDARY,
    },
    buddiesContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "65%",
        height: 60,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: GLOBAL_COLOR.SECONDARY, // Couleur de la bordure
        borderWidth: 2, // Épaisseur de la bordure
    },
    bubbles: {
        flexGrow: 1,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    buttonAddBuddy : {
        position: 'relative',
        right: -1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderLeftColor: GLOBAL_COLOR.SECONDARY, // Couleur de la bordure à gauche
        borderLeftWidth: 2,
        // borderTopRightRadius: 30,
        // borderBottomRightRadius: 30,
    },  
    buddysWord : {
        color : GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 15,
        padding: 20
    },
    containerInfos : {
        marginTop: 15,
        height : '75%',
        width: '90%',
        position: 'relative',
        backgroundColor: 'white',
        borderColor: GLOBAL_COLOR.SECONDARY,
        borderWidth: 2,
        borderRadius: 10,
        shadowOffset: { width: 1, height: 4 }, // Ajustez l'offset souhaité
        shadowOpacity: 0.3, // Ajustez l'opacité souhaitée
        shadowRadius: 4, // Ajustez le rayon de l'ombre souhaité
        elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
    infos: {
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
        // backgroundColor: 'red',
    },
    edit: {
        position: 'absolute',
        top: 2,
        right: 2,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 15,
        paddingLeft: 15,
        backgroundColor: 'white',
    },
    textInfos : {
        marginBottom: 5,
        fontSize: 18,
        color: GLOBAL_COLOR.SECONDARY,
        // marginTop: 5,
        // marginLeft: 5,
    },
    textInfosBold: {
        fontWeight: 'bold'
    },
    line: {
        alignItems: "center",
    },
    lines : {
        width : "90%",
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: GLOBAL_COLOR.PRIMARY,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 1, 
    },
    description:{
        alignItems: 'center',
    },
    desc : {
        // wordWrap: 'break-word',
        color: GLOBAL_COLOR.SECONDARY,
        fontSize: 17,
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
