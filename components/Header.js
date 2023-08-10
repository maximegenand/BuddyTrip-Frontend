import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Header({ navigation, title, participants, handlePress, style}) {
  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity style={styles.headerSide} onPress={() => navigation.navigate('Home')} activeOpacity={0.5}>
        <FontAwesome name="arrow-left" size={30} color='white' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerCenter} onPress={handlePress}>
          <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>{title}</Text>
          <Text style={styles.buddies}>{participants}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerSide} activeOpacity={0.5}>
        <FontAwesome name="bell" size={30} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    header : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    headerSide: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
    },
    headerCenter: {
      flex: 1,
      gap: 5,
      paddingHorizontal: 5,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 700,
    },
    buddies: {
        color : 'white',
        fontSize: 12,
        fontStyle: 'italic',
    },
});
