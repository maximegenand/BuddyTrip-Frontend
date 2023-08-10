import { StyleSheet, Dimensions } from 'react-native';
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    content: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: '10%',
        paddingBottom: 20,
    },
    btnBuddy: {
        alignSelf: 'center',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
        shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
        shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
        elevation: 5, // Ajoutez la valeur d'élévation souhaitée
    },
    buddyText: {
        fontSize: 12,
        color: 'white',
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
    btnAdd: {
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
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    },
    space: {
        height: 20,
    }
})