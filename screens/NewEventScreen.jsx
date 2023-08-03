import { useRef, useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";
import { BACK_URL } from '@env';
// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/NewEventStyles";

//Import components
import Form from "../components/Form";

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import {} from "../redux/reducers/events";
import { StatusBar } from "expo-status-bar";

export default function NewEventScreen({ navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const tripToken = useSelector((state) => state.trip.value.token);
  const dispatch = useDispatch();

  const dimensions = Dimensions.get("screen");
  const dimensionsHeight = dimensions.height;

  // 2. UseEffect, UseState, UseRef
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState("");
  const [heureDeDepart, setHeureDeDepart] = useState("");
  const [heureDarrivee, setHeureDarrivee] = useState("");
  const [placesDispo, setPlaceDispo] = useState("");
  const [numeroBillet, setNumeroBillet] = useState("");
  const [heure, setHeure] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");

  // ETAT rendu conditionnel en fonction de l'event
  const [transport, setTransport] = useState(false);
  const [act, setAct] = useState(false);

  const [selected, setSelected] = useState("");
  // const titreRef = useRef(null);
  // const dateRef = useRef(null);
  // const heureDepartRef = useRef(null);
  // const placesDispoRef = useRef(null);
  // const numeroBilletRef = useRef(null);
  // const titreActRef = useRef(null);
  // const descriptionRef = useRef(null);
  

  // 3. Functions


 const handleChangeTitre = (inputValue) => { setTitre(inputValue) }
 const handleChangeDate = (inputValue) => { setDate(inputValue) }
 const handleChangeHeureDeDepart = (inputValue) => { setHeureDeDepart(inputValue) }
 const handleChangeHeureDarrivee = (inputValue) => { setHeureDarrivee(inputValue) }
 const handleChangePlaceDispo = (inputValue) => { setPlaceDispo(inputValue) }
 const handleChangeHeure = (inputValue) => { setHeure(inputValue) }
 const handleChangeNumeroBillet = (inputValue) => { setNumeroBillet(inputValue) }
 const handleChangeLieu = (inputValue) => { setLieu(inputValue) }
 const handleChangeDescription = (inputValue) => { setDescription(inputValue) }




// choix disponible dans l'input clickable
  const data = [
    { key: "1", value: "Voiture" },
    { key: "2", value: "Train" },
    { key: "3", value: "Avion" },
  ];

  // Définir les éléments JSX en fonction de la sélection
  let typeTransportInput;
  //l'input pour ajouter le nombre de place disponible si type de transport est la voiture 
  const typeTransportVoiture = (
    <View style={styles.containerInputDesc}>
      <Form placeholder="Nombre de places disponible" value={placesDispo} handleChangeText={handleChangePlaceDispo} keyboardType="numeric" />
    </View>
  );
  //l'input pour ajouter le numero de billet si le moyen de transport est train ou avion 
  const typeTransportCommun = (
    <View style={styles.containerInputDesc}>
      <Form placeholder="Numero de billet" value={numeroBillet} handleChangeText={handleChangeNumeroBillet} />
    </View>
  );
// gestion du transport en fonction de la selection du type de transport
  if (selected === "1") {
    typeTransportInput = typeTransportVoiture;
  } else if (selected === "") {
    typeTransportInput;
  } else {
    typeTransportInput = typeTransportCommun;
  }

  // input si bouton Transport = true
  const transportForm = (
    <View style={styles.transport}>
      <SelectList
        style={styles.transportList}
        data={data}
        setSelected={setSelected}
        placeholder="Selectionner un moyen de transport"
        boxStyles={{ backgroundColor: GLOBAL_COLOR.TERTIARY }}
        search={false}
        dropdownStyles={{ backgroundColor: GLOBAL_COLOR.TERTIARY }}
      />
      <View style={styles.containerInputDesc}>
      <Form placeholder="Heure de Depart" value={heureDeDepart} handleChangeText={handleChangeHeureDeDepart} />
      </View>
      <View style={styles.containerInputDesc}>
      <Form placeholder="Heure d'arriveé" value={heureDarrivee} handleChangeText={handleChangeHeureDarrivee} />
      </View>
      <View style={styles.containerInputDesc}>
      <Form placeholder="Lieu de départ" value={lieu} handleChangeText={handleChangeLieu} />
      </View>
      {typeTransportInput}
     <View style={styles.descritpion}>
     <Form placeholder="Description" value={description} handleChangeText={handleChangeDescription} />
      </View>
    </View>
  );
   //  input si bouton Activity = true
   
  const activityForm = (
    <View style={styles.transport}>
      <View style={styles.containerInputDesc}>
      <Form placeholder="Heure" value={heure} handleChangeText={handleChangeHeure} />
      </View>
      <View style={styles.containerInputDesc}>
      <Form placeholder="Lieu" value={lieu} handleChangeText={handleChangeLieu} />
      </View>
      <View style={styles.descritpion}>
     <Form placeholder="Description" value={description} handleChangeText={handleChangeDescription} />
      </View>
    </View>
  );

  //  si act = true => activityFormn, si transport = true => transportForm
  let formDynamique;
  if (act) {
    formDynamique = activityForm;
  } else if (transport) {
    formDynamique = transportForm;
  } else {
    formDynamique;
  }

  const handleTransportPress = () => {
    // Lorsque le bouton "Transport" est pressé, on veut mettre act à false et transport à true
    setTransport(true);
    setAct(false);
  };
  const handleActPress = () => {
    // Lorsque le bouton "Act" est pressé, on veut mettre act à true et transport à false
    setAct(true);
    setTransport(false);
  };

  
 // fonction handleAddEvent pour créer un nouveau groupe

 async function handleAddEvent() {
  try {
    // création de la donnée à envoyer au backend

      const eventData = {

      tokenTrip: tripToken,
      category: selected,
      name: titre,
      date:date,
      timeStart: heureDeDepart,
      timeEnd: heureDarrivee,
      place: lieu,
      ticket: numeroBillet,
      seats: placesDispo,
      description: description,
  }
    const response = await fetch(`${BACK_URL}/events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token: token, event: eventData}),
    });

    const responseData = await response.json();
    console.log("Réponse du serveur:", responseData);

    if (responseData.result === true) {
      // Redirigez l'utilisateur vers EventScreen si la réponse du backend est true
      navigation.navigate('Event');
    }

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'event au serveur :", error);
  }
}



  // return (
  //   <>
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //       style={{
  //         backgroundColor: "lightblue",
  //         height: dimensionsHeight - 50,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text> Salut </Text>
  //     <TextInput style={{ backgroundColor: "red", height: 100, width: 200 }} />
  //     </KeyboardAvoidingView>
  //   </>
  // );

  // 4. Return Component
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.header}>
          <FontAwesome
          onPress={() => navigation.navigate("Event")}
            style={styles.fleche}
            name="arrow-left"
            size={30}
            color={GLOBAL_COLOR.TERTIARY}
          />
          <Text style={styles.name}>Nouvelle Activité</Text>
        </View>
        <View style={styles.forms}>
        <Form placeholder="Titre" value={titre} handleChangeText={handleChangeTitre} />
        <Form placeholder="Date" value={date} handleChangeText={handleChangeDate} />
          <View style={styles.categorie}>
            <Text style={styles.textCategorie}>Selectionner une categorie :</Text>
            <View style={styles.bulles}>
              <TouchableOpacity style={styles.containerCategorie} onPress={handleTransportPress}>
                <FontAwesome name="car" size={20} color={GLOBAL_COLOR.SECONDARY} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerCategorie} onPress={handleActPress}>
                <FontAwesome
                  style={styles.car}
                  name="play"
                  size={20}
                  color={GLOBAL_COLOR.SECONDARY}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lines} />
          {formDynamique}
          <View style={styles.variable}>
            <TouchableOpacity style={styles.enregistrer}>
              <Text style={styles.enregistrerWord} onPress={() => handleAddEvent()}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
