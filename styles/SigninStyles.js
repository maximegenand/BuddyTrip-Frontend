import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GLOBAL_COLOR.SECONDARY,
  },
  logo: {
    alignContent: 'center',
    textAlign: 'center',
  },
  body: {
    width: '80%',
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
  inputContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputContainerDisabled: {
    backgroundColor: '#c0c0c0',
  },
  input : {
    width: '90%',
    margin: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor : GLOBAL_COLOR.SECONDARY,
  },
  inputDisabled: {
    backgroundColor: '#c0c0c0',
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
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  btnConnectDisabled: {
    backgroundColor: '#c0c0c0',
  },
  textConnect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textConnectDisabled: {
    color: '#c0c0c0',
  },
});
