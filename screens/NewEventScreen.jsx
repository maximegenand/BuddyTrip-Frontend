import { useRef, useState, useEffect } from "react";
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
  const dispatch = useDispatch();

  const dimensions = Dimensions.get("screen");
  const dimensionsHeight = dimensions.height;

  // 2. UseEffect, UseState, UseRef
  const [titre, setTitre] = useState("");
  const [transport, setTransport] = useState(false);
  const [act, setAct] = useState(false);
  const [selected, setSelected] = useState("");

  // 3. Functions

  const data = [
    { key: "1", value: "Voiture" },
    { key: "2", value: "Train" },
    { key: "3", value: "Avion" },
  ];

  let typeTransportInput;
  const typeTransportVoiture = (
    <View style={styles.containerInputDesc}>
      <TextInput
        placeholder="Nombre de places disponible"
        style={styles.inputDesc}
        keyboardType="numeric"
      ></TextInput>
    </View>
  );
  const typeTransportCommun = (
    <View style={styles.containerInputDesc}>
      <TextInput placeholder="Numero de billet" style={styles.inputDesc}></TextInput>
    </View>
  );

  if (selected === "1") {
    typeTransportInput = typeTransportVoiture;
  } else if (selected === "") {
    typeTransportInput;
  } else {
    typeTransportInput = typeTransportCommun;
  }

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
        <TextInput placeholder="Heure de Depart" style={styles.inputDesc}></TextInput>
      </View>
      {typeTransportInput}
      <View style={styles.descritpion}>
        <TextInput placeholder="Description" style={styles.inputDescription} />
      </View>
    </View>
  );

  const activityForm = (
    <View style={styles.transport}>
      <View style={styles.containerInputDesc}>
        <TextInput placeholder="Heure de Depart" style={styles.inputDesc}></TextInput>
      </View>
      <View style={styles.containerInputDesc}>
        <TextInput placeholder="Titre" style={styles.inputDesc}></TextInput>
      </View>
      <View style={styles.descritpion}>
        <TextInput placeholder="Description" style={styles.inputDescription} />
      </View>
    </View>
  );

  let description = (
    <View style={styles.descritpion}>
      <TextInput placeholder="Description" style={styles.inputDescription} />
    </View>
  );

  if (act) {
    description = activityForm;
  } else if (transport) {
    description = transportForm;
  } else {
    description;
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
            style={styles.fleche}
            name="arrow-left"
            size={30}
            color={GLOBAL_COLOR.TERTIARY}
          />
          <Text style={styles.name}>Nouvelle Activité</Text>
        </View>
        <View style={styles.forms}>
          <Form placeholder="Titre" onChangeText={setTitre} value={titre} />
          <Form placeholder="JJ/MM/AAAA" />
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
          <View style={styles.variable}>
            {description}
            <TouchableOpacity style={styles.enregistrer}>
              <Text style={styles.enregistrerWord}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
