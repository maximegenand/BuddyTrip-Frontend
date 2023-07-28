import { View, TouchableOpacity, StyleSheet, Text, TextInput, Button } from 'react-native';
import { globalStyles, colors } from '../styles/Global';
import { styles } from '../styles/Register_styles'

import { useDispatch, useSelector } from "react-redux";
import { updateName, resetUser } from '../redux/reducers/user';
import { useRef } from 'react';

export default function RegisterScreen({ navigation }) {

  const user = useSelector(state => state.user.value);
  const trips = useSelector(state => state.trips.value);
  const events = useSelector(state => state.events.value);
  const dispatch = useDispatch();
  console.log(user, trips, events);

  const inputRef = useRef(null)

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AllTrips')}>
        <Text>RegisterScreen</Text>
      </TouchableOpacity>
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
