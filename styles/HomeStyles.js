import { StyleSheet, Dimensions } from "react-native";
import { GLOBAL_COLOR } from "./globals";
import { FontDisplay } from "expo-font";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  listTrips: {
    alignItems: "center",
    width: "100%",
  },
  noTrip: {
    color: GLOBAL_COLOR.PRIMARY,
    paddingTop: 50,
    fontSize: 20,
    fontWeight: 700,
    fontStyle: 'italic',
  },
  tripContainer: {
    width: "90%",
    marginVertical: 20,
    padding: 10,
    backgroundColor: GLOBAL_COLOR.SECONDARY,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.3, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  tripTitle: {
    textAlign: "center",
    color: GLOBAL_COLOR.TERTIARY,
    fontSize: 22,
  },
  tripSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripParticipants: {
    color: GLOBAL_COLOR.TERTIARY,
  },
  tripDate: {
    color: GLOBAL_COLOR.TERTIARY,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
  },
  modalContent: {
    width: "80%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: GLOBAL_COLOR.SECONDARY,
    padding: 10,
  },
  titleModalContainer: {
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    color: GLOBAL_COLOR.SECONDARY,
    fontWeight: "bold",
    textAlign: "center",
  },

  removeButton: {
    backgroundColor: GLOBAL_COLOR.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  removeButtonText: {
    color: GLOBAL_COLOR.TERTIARY,
  },
  add: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    alignItems: "center",
  },
  boutonAdd: {
    shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.4, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  }
});
