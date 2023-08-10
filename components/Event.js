import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { findCategory } from "../modules/findCategory";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');
import { addDays, format } from "date-fns";

export default function Event({ event, handlePress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles.date}>
          <Text style={styles.hour}>{format(new Date(event.timeStart), "HH:mm")}</Text>
          <FontAwesome style={styles.car} name={findCategory(event.category)} size={30} color={GLOBAL_COLOR.TERTIARY} />
          <Text style={styles.hour}>{event.timeEnd && format(new Date(event.timeEnd), "HH:mm")}</Text>
        </View>
        <View style={styles.ou}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.participants}>{event.participants.length} participants : {event.participants.map(e => e.username)}</Text>
        </View>
        <View>
          <Text></Text>
          <Text style={styles.createur}>{event.user.username}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container : {
    width: screenWidth * 0.95,
    height: '100%',
    backgroundColor : GLOBAL_COLOR.SECONDARY,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.3, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
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
    fontSize: 18,
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
