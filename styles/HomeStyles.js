import { StyleSheet, Dimensions } from "react-native";
import { GLOBAL_COLOR, globalsStyles } from "./globals";
import { FontDisplay } from "expo-font";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBAL_COLOR.TERTIARY,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    padding: 10,
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  content: {
    width: "100%",
    marginBottom: 100,
  },
  noTrip: {
    alignSelf: 'center',
    paddingTop: 50,
    fontSize: 20,
    fontFamily: "Montserrat-Alternates-SemiBold-Italic",
    color: GLOBAL_COLOR.PRIMARY,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    gap: 20,
    marginTop: 40,
  },
  monthLine: {
    flex: 1,
    height: 2,
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  monthText: {
    color: GLOBAL_COLOR.PRIMARY,
    fontSize: 20,
    fontFamily: "Montserrat-Alternates-SemiBold-Italic",
  },
  tripContainer: {
    position: 'relative',
    left: -1,
    flexDirection: 'row',
    width: "95%",
    marginRight: "5%",
    marginVertical: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  tripContainerInner: {
    position: 'relative',
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: GLOBAL_COLOR.SECONDARY,
  },
  tripSubContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  tripTitle: {
    color: GLOBAL_COLOR.SECONDARY,
    fontSize: 22,
  },
  tripParticipants: {
    color: GLOBAL_COLOR.SECONDARY,
  },
  tripDate: {
    width: 100,
    textAlign: 'center',
    color: GLOBAL_COLOR.SECONDARY,
    fontStyle: 'italic',
  },
  add: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: "center",
  },
  boutonAdd: {
    shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.4, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },

  // Modale
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    height: "30%",
    borderRadius: 5,
    borderWidth:2,
    borderColor: GLOBAL_COLOR.PRIMARY,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleModalContainer: {
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    borderRadius: 5,
    padding: 10,
    width:'60%',
    height: '25%',
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    color: GLOBAL_COLOR.SECONDARY,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  btnModal:{
    width: '50%',
    height: '40%',
    bottom: -20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    borderRadius: 10,
    width: '80%',
    height: '35%',
  },
  removeButtonText: {
    color: GLOBAL_COLOR.TERTIARY,
  },
});
