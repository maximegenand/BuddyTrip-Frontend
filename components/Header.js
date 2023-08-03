import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Header({ navigation, title, participants, handlePress}) {
  return (
    <View style={styles.header}>
      <View style={styles.header_Left}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.8}>
          <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.header_text} onPress={handlePress}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.buddys}>{participants}</Text>
        </TouchableOpacity>
      </View>
      <FontAwesome style={styles.bell} name="bell" size={30} color={GLOBAL_COLOR.TERTIARY} />
    </View>
  );
}

const styles = StyleSheet.create({
    header : {
        width : screenWidth,
        height : screenHeight * 0.13,
        backgroundColor : GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    header_Left : {
        display: 'flex',
        flexDirection: 'row',
        marginLeft : 10,
    },
    name: {
        fontWeight: 'bold',
        color: GLOBAL_COLOR.TERTIARY,
    },
    buddys : {
        color : GLOBAL_COLOR.TERTIARY,
    },
    fleche : {
        marginRight: 10,
    },
    bell : {
        marginRight: 10,
    },
    header_text : {
      maxWidth: 200
    }
});
