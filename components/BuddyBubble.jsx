import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';

export default function BuddyBubble(props) {

  return (
    <View style={[
      styles.bubble,
      {
        zIndex: 100 - props.i,
        left: -0.4 * props.size * props.i,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      }
    ]}>
      {  // On affiche l'image de l'utilisateur si elle existe, sinon la première lettre de son nom
      props.add ? (
        <Text style={[styles.add, {fontSize: props.size / 3, paddingRight: props.size / 7}]}>+{props.add}</Text>
      ) : (
        props.buddy.image ? (
          <Image
            width={props.size}
            height={props.size}
            source={{uri: props.buddy.image}}
            resizeMode="cover"
            style={[styles.image, { borderRadius: props.size / 2 }]}
          />
        ):(
          <Text style={styles.initiale}>{props.buddy.username.slice(0,1).toUpperCase()}</Text>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    bubble: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOR.TERTIARY,
        borderWidth: 2,
        borderColor: GLOBAL_COLOR.PRIMARY,
    },
    image: {
        borderWidth: 2,
        borderColor: GLOBAL_COLOR.PRIMARY,
    },
    initiale: {
      color: GLOBAL_COLOR.SECONDARY,
      fontSize: 20,
      fontWeight: 700,
    },
    add: {
      alignSelf: 'flex-end',
      color: GLOBAL_COLOR.SECONDARY,
      fontWeight: 700,
    },
});
