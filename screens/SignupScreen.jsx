import { useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Modal,
  ActivityIndicator,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { BACK_URL } from '@env';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/SigninStyles";

//Import components
import Logo from '../components/Logo';
import InputComponent from '../components/Input';

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/reducers/user';
import { addAllTrips } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function SigninScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef

  // Gère l'affichage de la modale
  const [modalVisible, setModalVisible] = useState(false);
  // Gère l'affichage du message d'erreur
  const [ errorFetch, setErrorFetch ] = useState(null);
  // Gère la désactivation des inputs
  const [ disabled, setDisabled ] = useState(false);

  // Gère les infos dans les input
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  // Permet de supprimer le message d'erreur dès que l'utilisateur tape un nouveau texte
  useEffect(() => {
    if (errorFetch) setErrorFetch(null);
  }, [email, password])

  // On ajoute un listener qui sauvegarde le status du keyboard pour modifier l'affichage de la page en fonction
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // 3. Functions

  // Fonction pour masquer le clavier lorsque l'utilisateur appuie en dehors du champ de saisie
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Fonction de connection
  const handleConnect = async () => {
    // On annule l'action si le formulaire est disabled
    if (disabled) return;
    // On change la valeur du disabled le temps du fetch
    setDisabled(true);
    // On vérifie si les inputs ne sont pas vides
    if(!(
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    )) {
      setDisabled(false);
      setErrorFetch('Empty fields');
      return;
    }
    // On vérifie que les passwords matchent
    if(password !== confirmPassword) {
      setDisabled(false);
      setErrorFetch('Wrong password confirmation');
      return;
    }
    try {
      // On envoie la donnée de connexion au backend
      const fetchLogin = await fetch(`${BACK_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password}),
      });
      const data = await fetchLogin.json();
      // Si on a result False, on affiche un message à l'utilisateur
      if (!data.result) {
        setDisabled(false);
        setErrorFetch(data.error);
        return;
      }
      // Si tout est bon on reset les inputs et on redirige sur le home du user
      setUsername("");
      setEmail("");
      setPassword("");
      dispatch(login(data.user));
      dispatch(addAllTrips(data.trips));
      await navigation.navigate("Home");
      setDisabled(false);
    }
    // Si on a une erreur au moment du fetch, on renvoie une erreur
    catch (error) {
      setDisabled(false);
      setErrorFetch("Erreur de connexion au serveur");
      console.error("Erreur lors de l'envoi au serveur :", error);
    }
  }

  //Fonction qui gère la mise à jour des états en fonction du name renvoyé
  const handleInputChange = (name, value) => {
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  }



  // 4. Return Component
  const uri = 'https://st.depositphotos.com/2294011/3570/i/450/depositphotos_35708235-stock-photo-travel-and-trip.jpg';

  return (
    <ImageBackground source={{uri}} style={styles.backgroundImage} resizeMode="cover">
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={disabled}
        statusBarTranslucent={true}
      >
        <View style={styles.modal}><ActivityIndicator size="large" color="#750000" /></View>
      </Modal>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.safeView}
        >
          { keyboardStatus?
          (<Logo size={50} style={[styles.logo, {flexDirection: 'row'}]} />) : 
          (<Logo size={100} style={styles.logo} />)
          }
          <View style={styles.body}>
            <Text style={styles.error}>{errorFetch}</Text>
            <InputComponent
              key="username"
              name="username"
              type="username"
              placeholder="Nom d'utilisateur"
              onInputChange={handleInputChange}
              value={username}
            />
            <InputComponent
              key="email"
              name="email"
              type="email"
              placeholder="Email"
              onInputChange={handleInputChange}
              value={email}
            />
            <InputComponent
              key="password"
              name="password"
              type="new-password"
              placeholder="Mot de passe"
              onInputChange={handleInputChange}
              value={password}
            />
            <InputComponent
              key="confirmPassword"
              name="confirmPassword"
              type="current-password"
              placeholder="Confirmer votre mot de passe"
              onInputChange={handleInputChange}
              value={confirmPassword}
            />
            <TouchableOpacity style={styles.btnConnect} onPress={handleConnect} activeOpacity={0.8}>
              <Text style={styles.textConnect}>S'enregistrer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.linkContainer,{alignSelf: 'center'}]} onPress={() => navigation.goBack()}>
              <Text style={[styles.linkText, {textAlign: 'center'}]} activeOpacity={0.8}>Retour à la connexion</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      </TouchableOpacity>
    </ImageBackground>
  );
}
