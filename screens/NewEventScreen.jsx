import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/NewEventStyles";

//Import components

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import {  } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';
import { StatusBar } from 'expo-status-bar';
import Form from '../components/Form';


export default function NewEventScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef
  const [titre, setTitre] = useState('')
  const [transport, setTransport] = useState(false)
  const [act, setAct] = useState(false)

  // 3. Functions


  // 4. Return Component
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
            <Text style={styles.name}>Nouvelle Activité</Text>
        </View>
        <View style={styles.forms}>
        <Form placeholder='Titre' onChangeText={setTitre} value={titre}/>
        <Form placeholder='JJ/MM/AAAA'/>
        <View style={styles.categorie}>
        <Text style={styles.textCategorie}>Selectionner une categorie :</Text>
            <View style={styles.bulles}>
            <TouchableOpacity style={styles.containerCategorie} onPress={() => setTransport(!transport)}>
            <FontAwesome name="car" size={20} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerCategorie}onPress={() => setAct(!act)}>
            <FontAwesome style={styles.car} name="car" size={20} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
            </View>
        </View>
            <View style={styles.lines}/>
        <View style={styles.descritpion}>
        <TextInput placeholder='Description' style={styles.inputDescription}
        />
        </View>
        </View>
    </View>
  );
}
