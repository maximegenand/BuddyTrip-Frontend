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
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  inputAbsolute: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    paddingTop: 2,
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#a9a9a9',
    //backgroundColor: 'white',
    //borderTopLeftRadius: 5,
    //borderTopRightRadius: 5,
  },
  inputContainerDisabled: {
    backgroundColor: '#d3d3d3',
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
    backgroundColor: '#d3d3d3',
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
    backgroundColor: '#d3d3d3',
  },
  textConnect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textConnectDisabled: {
    color: '#d3d3d3',
  },
});
