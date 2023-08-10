import { StyleSheet, Dimensions, BackHandler, ImageBackground } from "react-native";
import { GLOBAL_COLOR } from "./globals";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    display: "flex",
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    width: "100%",
    height: "8%",
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: "bold",
    fontSize: 25,
  },
  headerText2: {
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: "bold",
    fontSize: 20,
  },
  headerText3: {
    color: GLOBAL_COLOR.PRIMARY,
    fontWeight: "bold",
    fontSize: 20,
  },
  btnHome: {
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    borderColor: GLOBAL_COLOR.TERTIARY,
    borderWidth: 2,
    borderRadius: 5,
  },
  name: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lines: {
    width: screenWidth * 0.9,
    borderBottomColor: GLOBAL_COLOR.PRIMARY,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textBrut: {
    color: GLOBAL_COLOR.SECONDARY,
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 20,
  },
  textVar: {
    color: "red",
    fontSize: 17,
    color: GLOBAL_COLOR.SECONDARY,
    marginLeft: 10,
  },
  containerText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconEdit: {
    marginRight: 20,
  },
  allFriends: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  containerFriends: {
    width: "60%",
    height: "8%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    borderWidth: 2,
    borderColor: GLOBAL_COLOR.PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  textAmis: {
    fontSize: 20,
    color: GLOBAL_COLOR.PRIMARY,
    fontWeight: "bold",
  },
  imgProfil: {
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBrutPhotoProfil: {
    color: GLOBAL_COLOR.SECONDARY,
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 20,
    marginRight: 30,
  },
  gestion : {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 80,
  },
  containerGestion: {
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    width: '40%',
    padding: 10,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  textGestion : {
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
