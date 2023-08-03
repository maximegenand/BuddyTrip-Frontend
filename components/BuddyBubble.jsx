import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';

export default function BuddyBubble({buddy, add, i}) {
console.log(buddy?.image);

    const textScreen = add ? `+${add}` : buddy?.username.slice(0,1).toUpperCase();

  return (
    <View style={[ styles.bubble, { left: -15 * i, zIndex: 100 - i } ]}>
      {  // On affiche l'image de l'utilisateur si elle existe, sinon la première lettre de son nom
      buddy?.image ? (
        <Image
            source={{uri: buddy.image}}
            resizeMode="cover"
            style={styles.image}
        />
      ):(
        <Text style={styles.initiale}>{textScreen}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    bubble: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        borderWidth: 2,
        borderColor: GLOBAL_COLOR.PRIMARY,
        borderRadius: 20,
    },
    image: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: GLOBAL_COLOR.PRIMARY,
        borderRadius: 20,
    },
    initiale: {
        color: GLOBAL_COLOR.SECONDARY,
        fontSize: 20,
        fontWeight: 700,
    }
});
