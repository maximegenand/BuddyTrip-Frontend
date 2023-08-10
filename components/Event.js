import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { findCategory } from "../modules/findCategory";
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');
import { addDays, format } from "date-fns";

import SvgCar from "./svg/SvgCar";
import SvgPlane from "./svg/SvgPlane";
import SvgTrain from "./svg/SvgTrain";
import SvgActivity from "./svg/SvgActivity";

export default function Event({ event, handlePress }) {

  // Gestion des icones SVG à afficher
  const icon = (category) => {
    const width = 30;
    const height = 30;
    const fill = GLOBAL_COLOR.PRIMARY;
    if (category === 'travel car') return <SvgCar style={{ alignSelf: "center" }} width={width} height={height} fill={fill} />
    else if (category === 'travel plane') return <SvgPlane style={{ alignSelf: "center" }} width={width} height={height} fill={fill} />
    else if (category === 'travel train') return <SvgTrain style={{ alignSelf: "center" }} width={width} height={height} fill={fill} />
    return <SvgActivity style={{ alignSelf: "center" }} width={width} height={height} fill={fill} />
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <View style={styles.date}>
          <Text style={styles.hour}>{format(new Date(event.timeStart), "HH:mm")}</Text>
          {icon(event.category)}
          <Text style={styles.hour}>{event.timeEnd && format(new Date(event.timeEnd), "HH:mm")}</Text>
        </View>
        <View style={styles.where}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.participants}>{event.participants.length} participants</Text>
        </View>
        <View style={styles.createur}>
          <Text style={styles.text}>créateur:</Text>
          <Text style={styles.text}>{event.user.username}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container : {
    // width: "95%",
    //width: '100%',
    //width: screenWidth*0.92,
    // height: '100%',
    //height:  screenHeight*0.12,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor : 'white',
    borderWidth: 1,
    borderColor: GLOBAL_COLOR.PRIMARY,
    //borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 6 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.3, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  date : {
    width: '20%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  hour : {
    color: GLOBAL_COLOR.PRIMARY,
  },
  name : {
    color: GLOBAL_COLOR.PRIMARY,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  participants : {
    color: GLOBAL_COLOR.PRIMARY,
  },
  where: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createur:{
    width: '20%',
    marginBottom:50,
  },
  text : {
    color: GLOBAL_COLOR.PRIMARY,
  },
  car : {
    marginTop: 5,
    marginBottom: 5
  }
});
