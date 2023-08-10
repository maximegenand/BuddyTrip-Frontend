import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { GLOBAL_COLOR } from "../styles/globals";

export default function BubblesOnEvent(props) {
  return (
    <View style={styles.buddiesContainer}>
      <Text style={styles.titleBuddies}>Buddies :</Text>
      <View style={styles.buddiesContent}>
        <BuddiesBar style={styles.bubbles} buddies={participants} max={5} />
        {
          /* Afficher une icône en fonction de l'état */
          isCreator ? (
            <View style={styles.buttonAddBuddy}>
              <FontAwesome name="check" size={30} color={GLOBAL_COLOR.SECONDARY} />
            </View>
          ) : isParticipant ? (
            <TouchableOpacity style={styles.buttonAddBuddy} activeOpacity={0.8} onPress={handleDelMePress}>
              <FontAwesome name="minus" size={30} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonAddBuddy} activeOpacity={0.8} onPress={handleAddMePress}>
              <FontAwesome name="plus" size={30} color={GLOBAL_COLOR.SECONDARY} />
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
