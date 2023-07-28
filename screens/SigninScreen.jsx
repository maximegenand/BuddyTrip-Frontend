import { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';

// Import styles
import { globalsStyles, GLOBAL_COLOR } from '../styles/globals'
import styles from "../styles/SigninStyles";

//Import components

//Import modules

// Import redux
import { useDispatch, useSelector } from "react-redux";
import { updateName, resetUser } from '../redux/reducers/user';
import {  } from '../redux/reducers/trips';
import {  } from '../redux/reducers/events';


export default function SigninScreen({ navigation }) {

  // 1. Redux storage
  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();

  // 2. UseEffect, UseState, UseRef
  const inputRef = useRef(null);


  // 3. Functions


  // 4. Return Component
  return (
    <View style={globalsStyles.container}>
      <Text style={globalsStyles.title}>SigninScreen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text style={{marginTop: 50}}>Test pour redux :</Text>
      <Text>username : {user.username}</Text>
      <TextInput
        placeholder='New username'
        ref={inputRef}
        onChangeText={value => inputRef.inputValue = value}
      />
      <Button title='Change username' onPress={() => dispatch(updateName(inputRef.inputValue))} />
      <Button title="Reset Initial User value" onPress={() => dispatch(resetUser())} />
    </View>
  );
}
