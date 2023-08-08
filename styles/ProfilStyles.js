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
    width: "100%",
    height: "8%",
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: "bold",
    fontSize: 20,
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
    fontSize: "17",
    marginLeft: 20,
  },
  textVar: {
    color: "red",
    fontSize: "17",
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
    backgroundColor: GLOBAL_COLOR.SECONDARY,
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 10,
  },
  containerFriends: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textAmis: {
    fontSize: 20,
    color: GLOBAL_COLOR.TERTIARY,
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
    fontSize: "17",
    marginLeft: 20,
    marginRight: 30,
  },
});
