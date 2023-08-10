import { useRef, useState, useEffect } from "react";
import {
  View, 
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";
import { format, isSameMonth } from "date-fns";
import { fr } from 'date-fns/locale'
import { BACK_URL } from "@env";


// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/HomeStyles";

//Import components
import Logo from "../components/Logo";
import SvgUser from "../components/svg/SvgUser";
import BoutonAdd from "../components/BoutonAdd";
import BuddyBubble from "../components/BuddyBubble";

//Import modules
import { formatPeriod } from "../modules/dates";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import { addAllTrips, deleteTrip } from "../redux/reducers/trips";
import {} from "../redux/reducers/events";

export default function HomeScreen({ navigation }) {

// 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

// 2. UseEffect, UseState, UseRef
  const [modalVisible, setModalVisible] = useState(false);
  const [infosModalTrip, setInfosModalTrip] = useState({});

// 3. Functions

  // Fonction de récuperation des elements du trips pour la Modal
  const handleModalSuppression = (tokenTrip) => {
    const tripInfosModal = trips.find((e) => e.tokenTrip === tokenTrip);
    setModalVisible(true);
    setInfosModalTrip({
      titleTripModal: tripInfosModal.name,
      tokenTripModal: tokenTrip,
    });
  };

  // Boutton de la modal 
  const ModalButton = ({ onPress, text }) => (
    <TouchableOpacity style={styles.removeButton} onPress={onPress}>
      <Text style={styles.removeButtonText}>{text}</Text>
    </TouchableOpacity>
  );

  // FETCH / Fonction pour supprimer le groupe
  const handleDeleteTrip = () => {
    const token = user.token;
    const tokenTrip = infosModalTrip.tokenTripModal;
  
    fetch(`${BACK_URL}/trips/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, tokenTrip }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.result === true){
          dispatch(deleteTrip(tokenTrip));
        }
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE :", error);
      });
  };

  // FETCH / Fonction pour quitter le groupe
  const quitTrip = () => {
    const token = user.token;
    const tokenTrip = infosModalTrip.tokenTripModal;
  
    fetch(`${BACK_URL}/trips/quit`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, tokenTrip }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.result === true){
          dispatch(deleteTrip(tokenTrip));
        }
        setModalVisible(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête DELETE :", error);
      });
  };

  let monthPrec = '';

// 4. Return Component

  // Fonction d'affichage de la liste des Trips
  const tripList = trips.map((trip) => {
    const buddiesCount = trip.participants.length;
    let buddyList = `${buddiesCount} buddies`;
    if (buddiesCount === 1) buddyList = '1 buddy';
    else if (buddiesCount === 0) buddyList = '';

    // On vérifie que le mois du trip précédant est identique
    const isScreenMonth = isSameMonth(new Date(trip.dateStart), new Date(monthPrec));
    monthPrec = trip.dateStart;
    // S'il ne l'est pas on affiche un titre avant le trip
    const titleMonth = !isScreenMonth ? (
      <View style={styles.monthContainer}>
        <View style={styles.monthLine}></View>
        <Text style={styles.monthText}>{format(new Date(trip.dateStart), 'MMMM yyyy', { locale: fr })}</Text>
        <View style={[styles.monthLine, {flex: 2}]}></View>
      </View>
    ) : null;

    return (
    <>
      {titleMonth}
      <TouchableOpacity
        style={styles.tripContainer}
        key={trip.tokenTrip}
        onLongPress={() => handleModalSuppression(trip.tokenTrip)}
        onPress={() => navigation.navigate("TabNavigator", { screen: "Trip", params: {tokenTrip: trip.tokenTrip }})}
      >
        <View style={styles.tripContainerInner}>
          <View style={styles.tripSubContainer}>
            <Text style={styles.tripTitle}>{trip.name}</Text>
            <Text style={styles.tripParticipants}>{buddyList}</Text>
          </View>
          <Text style={styles.tripDate}>{formatPeriod([new Date(trip.dateStart), new Date(trip.dateEnd)])}</Text>
        </View>
        <View styles={styles.chevron}></View>
      </TouchableOpacity>
    </>
    )
  });

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
              <View style={styles.modalButton}>
                <ModalButton onPress={() => handleDeleteTrip()} text="Supprimer le Trip" />
                <ModalButton onPress={() => quitTrip()} text="Quitter le Trip" />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={styles.header}>
          <Logo style={{flexDirection: 'row'}} onPress={() => navigation.navigate("Signin")}/>
          <TouchableOpacity onPress={() => navigation.navigate("Profil")} activeOpacity={0.5}>
            <BuddyBubble size={50} i={1} buddy={{ username: user.username, image: null }} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            {
              // Si un trip est enregistré, on affiche la liste, sinon on envoie un message de remplacement
              tripList.length ? tripList : <Text style={styles.noTrip}>Aucun Trip renseigné</Text>
            }
          </View>
        </ScrollView>
        <View style={styles.add}>
          <BoutonAdd onPress={() => navigation.navigate("NewTrip")} buttonStyle={styles.boutonAdd}/>
        </View>
      </SafeAreaView>
    </>
  );
}