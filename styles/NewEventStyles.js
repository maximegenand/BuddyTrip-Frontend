import { StyleSheet } from 'react-native';
import { GLOBAL_COLOR } from './globals';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.SECONDARY,
    },
    header: {
        flexDirection: 'row',
        alignItems : 'center',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    title: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: GLOBAL_COLOR.TERTIARY,
    },
    body: {
        paddingTop: 10,
        paddingHorizontal: '10%',
        paddingBottom: 20,
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
        borderBottomWidth: StyleSheet.hairlineWidth,                                     
    },
    selectList: {
        marginBottom: 20,
    },
    insideList: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 5,
    },
    textList: {
        fontSize: 16,
    },
    btnSave: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
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