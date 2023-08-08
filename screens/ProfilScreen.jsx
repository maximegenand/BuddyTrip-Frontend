import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, Image } from "react-native";

// Import styles
import { globalsStyles, GLOBAL_COLOR } from "../styles/globals";
import styles from "../styles/ProfilStyles";

//Import components
import BuddyBubble from "../components/BuddyBubble";

//Import modules
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { BACK_URL } from "@env";
// Import redux
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/reducers/user";
import {} from "../redux/reducers/trips";
import {} from "../redux/reducers/events";

export default function ProfilScreen({ navigation }) {
  // 1. Redux storage
  const user = useSelector((state) => state.user.value);
  const trips = useSelector((state) => state.trips.value);
  const events = useSelector((state) => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // 3. Functions
console.log(events)

  // 4. Return Component
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={GLOBAL_COLOR.PRIMARY}
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: GLOBAL_COLOR.PRIMARY }} />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profil</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.name}>
            <View style={styles.containerText}>
              <Text style={styles.textBrut}>Username :</Text>
              <Text style={styles.textVar}>{user.username}</Text>
            </View>
            <FontAwesome
              style={styles.iconEdit}
              name="edit"
              size={20}
              color={GLOBAL_COLOR.SECONDARY}
            />
          </View>
          <View style={styles.lines} />
          <View style={styles.name}>
            <View style={styles.containerText}>
              <Text style={styles.textBrut}>Email :</Text>
              <Text style={styles.textVar}>{user.email}</Text>
            </View>
            <FontAwesome
              style={styles.iconEdit}
              name="edit"
              size={20}
              color={GLOBAL_COLOR.SECONDARY}
            />
          </View>
          <View style={styles.lines} />
          <View style={styles.name}>
            <View style={styles.containerImg}>
              <Text style={styles.textBrutPhotoProfil}>Photo de profil :</Text>
              <BuddyBubble
                size={50}
                i={1}
                buddy={{ username: user.username, image: null }}
              />
            </View>
            <FontAwesome
              style={styles.iconEdit}
              name="edit"
              size={20}
              color={GLOBAL_COLOR.SECONDARY}
            />
          </View>
          <View style={styles.lines} />
          <View style={styles.containerFriends}>
            <TouchableOpacity style={styles.allFriends}>
              <Text style={styles.textAmis}>Liste d'amis</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
