import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";

export default function Form({visible}) {
  return(
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <View style={styles.modal}><ActivityIndicator size="large" color="#750000" /></View>
    </Modal>
  )
};

const styles = StyleSheet.create({
modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
});