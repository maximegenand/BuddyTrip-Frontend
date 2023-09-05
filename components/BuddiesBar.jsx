import { StyleSheet, TouchableOpacity } from 'react-native';
import BuddyBubble from '../components/BuddyBubble';

// Taille par défaut des bulles
const defaultSize = 50;

export default function BuddiesBar(props) {
  // Si on a une props size, on l'applique, sinon on utilise la valeur par défaut
  const size = props.size ? props.size : defaultSize;

  // Si on envoie en props la longueur max de l'affiche des buddies, on enregistre le nombre max, sinon on passe la longueur complète des buddies
  let indexMax = props.buddies.length;
  let substrac = 0;

  if (props.max && props.max < indexMax) {
    indexMax = props.max - 1;
    substrac = props.buddies.length - indexMax;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        props.style,
        { width: (indexMax + 1 + 0.7) * size * 0.7 },
      ]}
    >
      {
        // Affiche des BuddyBubbles
        props.buddies.map(
          (buddy, i) =>
            indexMax > i && (
              <BuddyBubble
                key={buddy.tokenUser}
                buddy={buddy}
                i={i}
                size={size}
              />
            ),
        )
      }
      {
        // Si on a plus de buddies que ceux à afficher on créé une bulle contenant le nombre à ajouter
        substrac > 0 && (
          <BuddyBubble key={substrac} add={substrac} i={indexMax} size={size} />
        )
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
  },
});
