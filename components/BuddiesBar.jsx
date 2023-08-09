import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import BuddyBubble from "../components/BuddyBubble";

// Taille par défaut des bulles
const defaultSize = 50;

export default function BuddiesBar(props) {
  //
  const size = props.size ? props.size : defaultSize;

  const buddies = props.buddies;
  // [
  //   { tokenUser: "7", username: "John",},
  //   { tokenUser: "1", username: "Onizuka", image: "http://passion-gto.net/images/multimedia/galeries-personnages/Passion-GTO.Galerie.Personnage-Eikichi-Onizuka-416.jpg" },
  //   { tokenUser: "2", username: "Barbie", image: "https://shopping.mattel.com/cdn/shop/products/f2eqtybcp33tnhvvh8lm_4096f2ba-7814-4c34-9e36-eb4b376d1d48.jpg?v=1688637932" },
  //   { tokenUser: "3", username: "Thierry", },
  //   { tokenUser: "4", username: "Ken", image: "https://www.parismatch.com/lmnr/f/webp/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2022/03/02/04/Le-sosie-francais-de-Ken-Quentin-Dehar-s-est-suicide.jpg?VersionId=F0LWSdaDRqNRkh_FxwPuBcP3co3BNOSK" },
  //   { tokenUser: "5", username: "Robert", },
  //   { tokenUser: "6", username: "Julia", image: "http://passion-gto.net/images/multimedia/galeries-personnages/Passion-GTO.Galerie.Personnage-Julia-Murai-007.jpg" },
  //   { tokenUser: "8", username: "René", },
  //   { tokenUser: "9", username: "Sonia", },

  // ];

  // Si on envoie en props la longueur max de l'affiche des buddies, on enregistre le nombre max, sinon on passe la longueur complète des buddies
  let indexMax = buddies.length;
  let substrac = 0;

  if(props.max && props.max < buddies.length) {
    indexMax = props.max - 1;
    substrac = buddies.length - indexMax;
  }

//console.log('affichés :', indexMax)
//console.log('boutton + :', substrac)
  return (
    <TouchableOpacity style={[ styles.container, props.style, { width: (indexMax + 1 + 0.6) * size * 0.6 } ]}>
      {
        // Affiche des BuddyBubbles
        buddies.map((buddy, i) => indexMax > i && (<BuddyBubble key={buddy.tokenUser} buddy={buddy} i={i} size={size} />))
      }
      {
        // Si on a plus de buddies que ceux à afficher on créé une bulle contenant le nombre à ajouter
        substrac > 0 && <BuddyBubble key={substrac} add={substrac} i={indexMax} size={size} />
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container : {
      position: 'relative',
      flexDirection: 'row',
    },
});
