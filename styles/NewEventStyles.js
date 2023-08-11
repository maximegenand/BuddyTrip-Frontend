import { StyleSheet } from 'react-native';
import { GLOBAL_COLOR } from './globals';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    content: {
        paddingTop: 10,
        paddingHorizontal: '10%',
        paddingBottom: 20,
    },
    textCategorie: {
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: GLOBAL_COLOR.TERTIARY,
    },
    bubblesContainer : {
        display: 'flex',
        flexDirection : 'row',
    },
    bubble: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    line : {
        marginVertical: 20,
        borderBottomColor: GLOBAL_COLOR.PRIMARY,
        borderBottomWidth: 1,                                     
    },
    selectList: {
        marginBottom: 20,
    },
    insideList: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: GLOBAL_COLOR.SECONDARY,
        borderRadius: 5,
    },
    textList: {
        fontSize: 16,
    },
    textError: {
        height: 30,
        marginBottom: 10,
        textAlign: 'center',
        color: '#750000',
        fontSize: 20,
        fontWeight: 700,
        textShadowColor: 'white',
        textShadowRadius: 10,
    },
    btnSave: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "5%",
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.QUATERNARY,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
        shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
        shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
        elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
    textSave: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    space: {
        height: 20,
    }
});