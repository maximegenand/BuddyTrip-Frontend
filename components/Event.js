import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');
import { addDays, format } from "date-fns";

export default function Event({event}) {
  return (
    <View style={styles.container}>
        <View style={styles.date}>
          <Text style={styles.hour}>{format(new Date(event.timeStart), "hh:mm")}</Text>
          <FontAwesome style={styles.car} name="car" size={30} color={GLOBAL_COLOR.TERTIARY} />
          <Text style={styles.hour}>{format(new Date(event.timeEnd), "hh:mm")}</Text>
        </View>
        <View style={styles.ou}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.participants}>{event.participants.length} participants : {event.participants.map(e => e.username)}</Text>
        </View>
        <Text style={styles.createur}>{event.user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    width: screenWidth * 0.95,
    height: screenHeight * 0.14,
    backgroundColor : GLOBAL_COLOR.SECONDARY,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5
  },
  date : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  hour : {
    color: GLOBAL_COLOR.TERTIARY,
  },
  name : {
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  participants : {
    color: GLOBAL_COLOR.TERTIARY,
  },
  ou : {
    displai: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createur : {
    color: GLOBAL_COLOR.TERTIARY,
    marginBottom : 50,
  },
  car : {
    marginTop: 5,
    marginBottom: 5
  }
});
