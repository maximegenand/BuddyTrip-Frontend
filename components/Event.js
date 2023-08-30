import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { GLOBAL_COLOR } from '../styles/globals';

import { compareDate } from '../modules/dates';
import { timeToText } from '../modules/formatTime';
import BuddyBubble from './BuddyBubble';

import SvgCar from './svg/SvgCar';
import SvgPlane from './svg/SvgPlane';
import SvgTrain from './svg/SvgTrain';
import SvgActivity from './svg/SvgActivity';
import SvgPeople from './svg/SvgPeople';

export default function Event({ event, handlePress }) {
  // Gestion des icones SVG à afficher
  const icon = (category) => {
    const width = 30;
    const height = 30;
    const fill = GLOBAL_COLOR.PRIMARY;
    if (category === 'travel car')
      return (
        <SvgCar
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    else if (category === 'travel plane')
      return (
        <SvgPlane
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    else if (category === 'travel train')
      return (
        <SvgTrain
          style={{ alignSelf: 'center' }}
          width={width}
          height={height}
          fill={fill}
        />
      );
    return (
      <SvgPeople
        style={{ alignSelf: 'center' }}
        width={width}
        height={height}
        fill={fill}
      />
    );
  };

  // Affichage du nombre de participants
  let participantsText = `${event.participants.length} participant`;
  if (event.participants.length > 1) participantsText += 's';

  // Gestion des trajets ne se terminant pas le même jour que leur départ
  let timeEnd = '';
  if (event.timeEnd)
    timeEnd = (
      <>
        <Text style={styles.hour}>{timeToText(event.timeEnd)}</Text>
        <Text style={styles.jPlus}>
          {compareDate(event.timeStart, event.timeEnd)}
        </Text>
      </>
    );

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.date}>
        <Text style={styles.hour}>{timeToText(event.timeStart)}</Text>
        {icon(event.category)}
        <View>{event.timeEnd && timeEnd}</View>
      </View>
      <View style={styles.where}>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.participants}>{participantsText}</Text>
      </View>
      <View style={styles.userBubble}>
        <BuddyBubble
          key={event.user.tokenUser}
          buddy={event.user}
          i={0}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "95%",
    //width: '100%',
    //width: screenWidth*0.92,
    // height: '100%',
    //height:  screenHeight*0.12,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: GLOBAL_COLOR.PRIMARY,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 }, // Ajustez l'offset souhaité
    shadowOpacity: 0.2, // Ajustez l'opacité souhaitée
    shadowRadius: 6, // Ajustez le rayon de l'ombre souhaité
    elevation: 5, // Ajoutez la valeur d'élévation souhaitée
  },
  date: {
    width: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    //backgroundColor: "red",
  },
  hour: {
    color: GLOBAL_COLOR.PRIMARY,
  },
  jPlus: {
    position: 'absolute',
    bottom: -10,
    left: '20%',
    color: GLOBAL_COLOR.PRIMARY,
    fontSize: 10,
    fontWeight: 700,
    //backgroundColor: "green",
  },
  name: {
    color: GLOBAL_COLOR.PRIMARY,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  participants: {
    color: GLOBAL_COLOR.PRIMARY,
  },
  where: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBubble: {
    alignSelf: 'flex-start',
  },
  createur: {
    width: '20%',
    marginBottom: 50,
  },
  text: {
    color: GLOBAL_COLOR.PRIMARY,
  },
  car: {
    marginTop: 5,
    marginBottom: 5,
  },
});
