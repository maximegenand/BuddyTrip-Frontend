import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GLOBAL_COLOR } from '../styles/globals';
import SvgAdd from './svg/SvgAdd';

export default function BoutonAdd(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.buttonStyle]}
      onPress={props.onPress}
    >
      <View style={styles.innerCircle} />
      <View style={styles.innerCircle2} />
      <SvgAdd
        style={{ alignSelf: 'center' }}
        width={40}
        height={40}
        fill={GLOBAL_COLOR.TERTIARY}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    backgroundColor: GLOBAL_COLOR.QUATERNARY,
    borderRadius: 100,
  },
  innerCircle: {
    position: 'absolute',
    width: 85,
    height: 85,
    backgroundColor: GLOBAL_COLOR.TERTIARY,
    borderRadius: 100,
  },
  innerCircle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: GLOBAL_COLOR.QUATERNARY,
    borderRadius: 100,
  },
  plus: {
    position: 'absolute',
    fontSize: 50,
    color: GLOBAL_COLOR.TERTIARY,
    fontWeight: 'bold',
  },
});
