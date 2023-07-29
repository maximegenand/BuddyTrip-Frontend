import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container : {
        height: screenHeight,
        width: screenWidth,
        backgroundColor : GLOBAL_COLOR.SECONDARY
    },
    header: {
        height: screenHeight * 0.11,
        width : screenWidth,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        alignItems :'center',
        marginBottom: 20
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
        height : screenHeight * 0.20,
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
    }
});
