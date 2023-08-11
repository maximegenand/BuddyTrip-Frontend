import { StyleSheet, Dimensions } from 'react-native';
import { globalsStyles, GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    headerSide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    headerCenter: {
        flex: 1,
        gap: 5,
        paddingHorizontal: 5,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
    },
    titleBy: {
        color : 'white',
        fontSize: 12,
        fontStyle: 'italic',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    buddiesContainer: {
        width: "90%",
        alignSelf: 'center',
        alignItems : 'center',
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    textTitleBuddies: {
        marginHorizontal: 2,
        fontSize: 18,
        fontWeight: "bold",
        color: GLOBAL_COLOR.SECONDARY,
    },
    Line: {
        flex: 1,
        height: 2.5,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
    },
    buddiesContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: 60,
        borderColor: GLOBAL_COLOR.SECONDARY,
    },
    bubbles: {
        flexShrink: 1,
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
        shadowOffset: { width: 1, height: 3 }, // Ajustez l'offset souhaité
        shadowOpacity: 0.3, // Ajustez l'opacité souhaitée
        shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
        elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
    infos: {
        position: 'relative',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
        // backgroundColor: 'red',
    },
    edit: {
        position: 'absolute',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        top: -10,
        right: 0,
        padding: 10,
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
