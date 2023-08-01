import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/EventStyles";
import Header from "../components/Header";

//Import components

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import {} from "../redux/reducers/events";

export default function EventScreen({ navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // 3. Functions

  // 4. Return Component
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.8}>
            <FontAwesome
              style={styles.fleche}
              name="arrow-left"
              size={30}
              color={GLOBAL_COLOR.TERTIARY}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header_right}>
          <Text style={styles.name}>ROME LES MECS</Text>
          <Text style={styles.ajouteur}>Ajouté par Rayenne</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.listBuddy}>
          <Text style={styles.buddysWord}>5 Buddys</Text>
          <TouchableOpacity style={styles.BouttonAddBuddy}>
            <Text style={styles.BouttonPlus}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infos}>
          <Text style={styles.textInfos}>
            <Text style={styles.textInfosBold}>Date</Text>: 26 Juillet
          </Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>heure</Text> : 13h</Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Lieu</Text> : Lyon</Text>
          <Text style={styles.textInfos}><Text style={styles.textInfosBold}>Places</Text> : 6 Places restantes</Text>
          <View style={styles.lines} />
          <Text style={styles.desc}>
            JAJDJjsjsjskskskkskskskAJD isisskskkskADIAJDIADNADIAD ADAJDIADNBJhhhhhhhhh
          </Text>
          <View>
          </View>
          <View style={styles.lines} />
          <View style={styles.pointInteret}>
            <Text style={styles.interetText}>Point d'intérêt :</Text>
            <Text style={styles.interetTextList} >- dhzhdzjdjzjd </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
