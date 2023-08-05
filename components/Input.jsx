/* Usage de Input Component

<InputComponent
  key="password"                    // key du component 
  type="current-password"           // permet de gérer la mise en page du component - voir params ligne 35
  name="password"                   // permet de savoir dans le component parent quel input a été mis à jour
  label="Mot de passe"              // texte à afficher
  onInputChange={handleInputChange} // fonction à invoquer dans le parent pour effectuer le changement du useState
  value={password}                  // mettre le useState
  // 
/>

Exemple de fonction à mettre dans le parent pour mettre à jour les useState

  const handleInputChange = (name, value) => {
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  }

*/

import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function InputComponent(props) {

  // Le label est true si l'input n'est pas vide, et false s'il est vide
  const [ label, setLabel ] = useState(props.value !== '' ? true : false);

  // A chaque changement de props.value, on vérifie si le label doit être affiché
  useEffect(() => {
    if (props.value !== '' && !label) setLabel(true);
    if (props.value === '' && label)  setLabel(false); 
  }, [props.value]);

  // Mise en page de l'input et du clavier différent en fonction du type d'input
  // => https://reactnative.dev/docs/textinput
  let params = {};
  if (props.type) {
    if (props.type === 'username') params = {
      autoComplete: 'username',
    }
    else if (props.type === 'email') params = {
      autoComplete: "email",
      autoCapitalize: "none",
      keyboardType: "email-address",
    }
    else if (props.type === 'current-password' || props.type === 'new-password') params = {
      autoComplete: props.type,
      autoCapitalize: "none",
      secureTextEntry: true,
    }
  }

  return (
    <View style={[styles.inputContainer, props.disabled && styles.inputContainerDisabled]}>
      <Text style={styles.label}>{label && <>{props.placeholder}</>}</Text>
      <TextInput
        style={[styles.input, props.disabled && styles.inputDisabled]}
        editable={!props.disabled}
        placeholder={props.placeholder}
        onChangeText={(value) => props.onInputChange(props.name, value)}
        value={props.value}
        {...params}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    paddingTop: 2,
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#a9a9a9',
  },
  input : {
    width: '90%',
    margin: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor : GLOBAL_COLOR.SECONDARY,
  },
});
