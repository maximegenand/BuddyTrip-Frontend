import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Header({ navigation, title, participants, handlePress, style}) {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.header_Left}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.5}>
          <FontAwesome style={styles.fleche} name="arrow-left" size={30} color={GLOBAL_COLOR.TERTIARY} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.header_text} onPress={handlePress}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.buddys}>{participants}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <FontAwesome style={styles.bell} name="bell" size={30} color={GLOBAL_COLOR.TERTIARY} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : GLOBAL_COLOR.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    header_Left : {
        display: 'flex',
        flexDirection: 'row',
    },
    header_text :{
      flexDirection: 'column',
      alignItems: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: GLOBAL_COLOR.TERTIARY,
      margin: 5,
    },
    buddys : {
        color : GLOBAL_COLOR.TERTIARY,
        fontSize: 12,
        fontStyle: 'italic',
    },
    fleche : {
        marginRight: 10,
    },
    bell : {
    },
    header_text : {
      maxWidth: 200
    }
});
