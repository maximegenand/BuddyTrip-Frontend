import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { colors } from '../styles/Global'

const styles = StyleSheet.create({
    container : {
       width:  Dimensions.get('window').width,
       height:  Dimensions.get('window').height,
       backgroundColor : colors.background_beige
    },
    header : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height * 0.13,
        backgroundColor : colors.button,
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    header_Left : {
        display: 'flex',
        flexDirection: 'row',
        marginLeft : 10
    },
    name: {
        fontWeight: 'bold',
        color: colors.background_beige,
    },
    buddys : {
        color : colors.background_beige
    },
    fleche : {
        marginRight: 10
    },
    bell : {
        marginRight: 10
    },
    fleche_left : {
        width: Dimensions.get('window').width * 0.16,
        height: Dimensions.get('window').height * 0.08,
        borderRadius: '70',
        backgroundColor: colors.button,
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center'
    },
    day : {
        width : Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: colors.button,
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 10,
    },
    calendrier : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        margin : 10
    },
    jour: {
        color: colors.background_beige,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    date : {
        color: colors.background_beige,
    }

});


export { styles };