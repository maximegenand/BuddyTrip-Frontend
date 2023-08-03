import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addListener } from "@reduxjs/toolkit";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Form(props) {
  return (
    <View style={styles.container} >
      <Text>{props.placeholder}</Text>
       <TextInput 
       placeholder={props.placeholder} 
       onChangeText={(value)=> props.handleChangeText(value)} 
       value={props.value}
       style={styles.input}
       styles={props.style}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  input : {
    borderBottomWidth: 1,
    borderBottomColor : GLOBAL_COLOR.SECONDARY,
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    fontSize: 15,
    margin: 10
  },
  container : {
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    width : screenWidth * 0.8,
    height : screenHeight * 0.06,
    borderRadius: 5,
    marginBottom: 20,
  },
});
