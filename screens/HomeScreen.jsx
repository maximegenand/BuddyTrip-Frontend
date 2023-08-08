import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, Br, StatusBar, SafeAreaView, ScrollView, Modal } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { BACK_URL } from "@env";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/HomeStyles";

//Import components
import Logo from "../components/Logo";
import SvgUser from "../components/svg/SvgUser";
import BoutonAdd from "../components/BoutonAdd";

//Import modules
import { formatPeriod } from "../modules/dates";
import { useNavigation } from "@react-navigation/native";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import { addAllTrips } from "../redux/reducers/trips";
import {} from "../redux/reducers/events";

export default function HomeScreen({ navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState
  const [modalVisible, setModalVisible] = useState(false);
  const [infosModalTrip, setInfosModalTrip] = useState({});

  // On récupère la liste des trip s dans le backend et on sauvegarde dans le redux storage
  // console.log('HOME Rerender')
  useEffect(() => {
    (async () => {
      const random = Math.round(Math.random() * 1000);
      //console.log('HomeScreen useEffect - Start',random);
      try {
        const tripsFetch = await fetch(`${BACK_URL}/trips/next?token=${user.token}`);
        const data = await tripsFetch.json();

        // On enregistre les infos dans le reducer si tout s'est bien déroulé
        if (data.result) {
          dispatch(addAllTrips(data.trips));
        }
      } catch (error) {
        console.error("HomeScreen - Error fetching data:", error);
      }
      //console.log('HomeScreen useEffect - End', random);
    })();
  }, []);

  // 3. Functions
  const navigationTokenTrip = useNavigation();

  const handlePressTokenTrip = (tokenTrip) => {
    const dataToSend = tokenTrip;
    navigation.navigate("TabNavigator", { screen: "Trip", params: { tokenTrip: tokenTrip } });
  };

  // Fonction d'affichage de la liste des Trips
  const tripList = trips.map((trip) => (
    <TouchableOpacity
      style={styles.tripContainer}
      key={trip.tokenTrip}
      onLongPress={() => handleModalSuppression(trip.tokenTrip)}
      onPress={() => handlePressTokenTrip(trip.tokenTrip)}
    >
      <Text style={styles.tripTitle}>{trip.name}</Text>
      <View style={styles.tripSubContainer}>
        <Text style={styles.tripParticipants}>{trip.participants.length} participants</Text>
        <Text style={styles.tripDate}>{formatPeriod([new Date(trip.dateStart), new Date(trip.dateEnd)])}</Text>
      </View>
    </TouchableOpacity>
  ));

  // recuperation des elements du trips pour la Modal
  const handleModalSuppression = (ModalTripToken) => {
    const tripInfosModal = trips.find((e) => e.tokenTrip === ModalTripToken);
    setModalVisible(true);
    setInfosModalTrip({
      titleTripModal: tripInfosModal.name,
      tokenTripModal: ModalTripToken,
      tokenCreateurModal: tripInfosModal.user.tokenUser,
    });
  };

  // modalbutton
  const ModalButton = ({ onPress, text }) => (
    <TouchableOpacity style={styles.removeButton} onPress={onPress}>
      <Text style={styles.removeButtonText}>{text}</Text>
    </TouchableOpacity>
  );

  // FETCH Supprmier le groupe (PAS ENCORE TESTÉ )
  const deleteTrip = () => {
    const data = {
      token: user.token,
      tokenTrip: infosModalTrip.tokenTripModal,
    };

    fetch(`${BACK_URL}/trips/quit`),
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token, tokenTrip}),
      }
        .then((response) => response.json())
        .then((data) => {
          setModalVisible(false);
        });
  };

  // FETCH Quitter le groupe
  const quitTrip = () => {
    console.log("quitter");
    setModalVisible(false);
  };

  // 4. Return Component
  return (
    <>
      <StatusBar translucent={false} backgroundColor={GLOBAL_COLOR.PRIMARY} barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <View style={styles.titleModalContainer}>
                <Text style={styles.modalTitle}>{infosModalTrip.titleTripModal}</Text>
              </View>
              {modalBoutton}
            </View>
<<<<<<< HEAD
            <View style={styles.modalButton}>
              <ModalButton onPress={() => deleteTrip()} text="Supprimer le Trip" />
              <ModalButton onPress={() => quitTrip()} text="Quitter le Trip" />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <StatusBar backgroundColor={GLOBAL_COLOR.TERTIARY} barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logo}>
          <SvgLogo width={50} height={50} fill={GLOBAL_COLOR.TERTIARY} />
          <Text style={styles.logoText}>BuddyTrip</Text>
        </View>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")} activeOpacity={0.8}>
            <SvgUser width={45} height={45} fill={GLOBAL_COLOR.PRIMARY} />
=======
>>>>>>> 68eb697911e5e1525f4aef4e07ef4d1f1d991456
          </TouchableOpacity>
        </Modal>
        <View style={styles.header}>
          <Logo style={{flexDirection: 'row'}} />
          <View style={styles.userContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")} activeOpacity={0.8}>
              <SvgUser width={40} height={40} fill={GLOBAL_COLOR.PRIMARY} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.listTrips}>
            {
              // Si un trip est enregistré, on affiche la liste, sinon on envoie un message de remplacement
              tripList.length ? tripList : <Text>Aucun Trip renseigné</Text>
            }
          </View>
        </ScrollView>
        <View style={styles.add}>
          <BoutonAdd onPress={() => navigation.navigate("NewTrip")} buttonStyle={styles.boutonAdd}/>
        </View>
<<<<<<< HEAD
      </ScrollView>
      <View style={styles.add}>
        <BoutonAdd onPress={() => navigation.navigate("NewTrip")} buttonStyle={styles.boutonAdd} />
      </View>
    </SafeAreaView>
=======
      </SafeAreaView>
    </>
>>>>>>> 68eb697911e5e1525f4aef4e07ef4d1f1d991456
  );
}
