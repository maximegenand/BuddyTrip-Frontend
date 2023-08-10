import { StyleSheet } from 'react-native';
import { GLOBAL_COLOR, STATUSBAR_HEIGHT } from './globals';

export default styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: GLOBAL_COLOR.SECONDARY+'B3', // 0.8 d'opacity - format #rrggbbaa -> https://borderleft.com/toolbox/rrggbbaa/
  },
  safeView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    alignContent: 'center',
    textAlign: 'center',
  },
  body: {
    width: '80%',
    marginBottom: 50,
  },
  error: {
    height: 30,
    textAlign: 'center',
    color: '#750000',
    fontSize: 20,
    fontWeight: 700,
    textShadowColor: 'white',
    textShadowRadius: 10,
  },
  linkContainer: {
    marginTop: -10,
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  btnConnect: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: GLOBAL_COLOR.QUATERNARY,
    shadowOffset: { width: 0, height: 4 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.4, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  textConnect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
