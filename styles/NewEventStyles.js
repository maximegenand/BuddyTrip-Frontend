import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR, STATUSBAR_HEIGHT } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
      },
      safeView: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      },
      header: {
          height: 60,
          backgroundColor: GLOBAL_COLOR.PRIMARY,
          display: 'flex',
          flexDirection: 'row',
          alignItems :'center',
          marginBottom: 20
      },
      body: {
        paddingHorizontal: '10%',
        marginBottom: 50,
      },
    name : {
        color: GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10
    },
    fleche : {
        marginLeft: 10
    },
    textCategorie: {
        color: GLOBAL_COLOR.TERTIARY,
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    containerCategorie: {
        height: screenHeight * 0.1 * 0.7,
        width: screenHeight * 0.1 * 0.7,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginLeft: 10
    },
    descritpion : {
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        width : screenWidth * 0.8,
        height : screenHeight * 0.1,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputDescription: {
        padding: 10
    },
    forms : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categorie : {
        marginRight: 80
    },
    bulles : {
        display: 'flex',
        flexDirection : 'row',
    },
    lines : {
        width : screenWidth * 0.8,
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: GLOBAL_COLOR.PRIMARY,
        borderBottomWidth: StyleSheet.hairlineWidth,                                     
    },
    inputDesc : {
        borderBottomWidth: 1,
        borderBottomColor : GLOBAL_COLOR.SECONDARY,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        fontSize: 15,
        margin: 10
    },
    containerInputDesc: {
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        width : screenWidth * 0.8,
        height : screenHeight * 0.06,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10
    },
    enregistrer : {
        width: screenWidth * 0.3,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center'
    }, 
    enregistrerWord : {
        color : GLOBAL_COLOR.TERTIARY
    }, 
    variable : {
        height: screenHeight * 0.51,
        display: 'flex',
    }
});