import { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Button, StatusBar } from 'react-native';
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/SigninStyles";

//Import components
import Logo from '../components/Logo';

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function SigninScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef
  const [ errorFetch, setErrorFetch ] = useState(null);
  const [ disabled, setDisabled ] = useState(false);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  // Permet de supprimer le message d'erreur dès que l'utilisateur tape un nouveau texte
  useEffect(() => {
    if (errorFetch) setErrorFetch(null);
}, [email, password])


  // 3. Functions

  // Fonction de connection
  const handleConnect = async () => {
    // On annule l'action si le formulaire est disabled
    if (disabled) return;

    // On change la valeur du disabled le temps du fetch
    setDisabled(true);

    // On vérifie si les inputs sont renseignés et ne sont pas vides
    if(!(email && email !== "" && password && password !== "")) {
      setDisabled(false);
      setErrorFetch('Empty fields');
      return;
    }
    try {
      // On envoie la donnée au backend
      const fetchLogin = await fetch(`${BACK_URL}/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const data = await fetchLogin.json();

      // Si on a result False, on affiche un message à l'utilisateur
      if (!data.result) {
        setDisabled(false);
        setErrorFetch(data.error);
        return;
      }

      // On reset les inputs et on redirige sur le home du user
      setPassword("");
      dispatch(login(data.user));
      navigation.navigate("Home");
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      setErrorFetch("Erreur de connexion au serveur");
      console.error("Erreur lors de l'envoi au serveur :", error);
    }
  }


  // 4. Return Component
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={GLOBAL_COLOR.SECONDARY} barStyle="light-content" />
      <Logo size={100} style={styles.logo} />
      <View style={styles.body}>
        <Text style={styles.error}>{errorFetch}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text onPress={() => {setEmail('john@gmail.com'); setPassword('azerty');}}>John</Text>
          <Text onPress={() => {setEmail('barbie@gmail.com'); setPassword('azerty');}}>Barbie</Text>
          <Text onPress={() => {setEmail('ken@gmail.com'); setPassword('azerty');}}>Ken</Text>
          <Text onPress={() => {setEmail('ben@gmail.com'); setPassword('azerty');}}>Ben</Text>
        </View>
        <View style={[styles.inputContainer, disabled && styles.inputContainerDisabled]}>
          <TextInput
            editable={!disabled}
            style={[styles.input, disabled && styles.inputDisabled]}
            placeholder="Email"
            autoComplete="email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={[styles.inputContainer, disabled && styles.inputContainerDisabled]}>
          <TextInput
            editable={!disabled}
            style={[styles.input, disabled && styles.inputDisabled]}
            placeholder="Password"
            autoComplete="current-password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <TouchableOpacity style={[styles.linkContainer, {alignSelf: 'flex-end'}]} onPress={() => console.log('mdp oublié')}>
          <Text style={[styles.linkText, {textAlign: 'right'}]} activeOpacity={0.8}>Mot de passe oublié</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnConnect, disabled && styles.btnConnectDisabled]} onPress={handleConnect} activeOpacity={0.8}>
          <Text style={[styles.textConnect, disabled && styles.textConnectDisabled]}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.linkContainer,{alignSelf: 'center'}]} onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.linkText, {textAlign: 'center'}]} activeOpacity={0.8}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </SafeAreaView>
  );
}
