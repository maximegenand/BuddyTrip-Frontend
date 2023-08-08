import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { GLOBAL_COLOR } from '../styles/globals';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

export default function AddBuddyTrip(props) {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      statusBarTranslucent={false}
    >
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Liste de tes buddies :</Text>
        </View>
        <View style={styles.body}>
          <MultipleSelectList
            setSelected={(key) => props.setBuddiesSelected(key)} 
            data={props.data}
            save="key"
            search={true}
            placeholder="Sélectionne tes buddies"
            searchPlaceholder="recherche"
            notFoundText="aucun buddy trouvé"
            label="Buddies"
            boxStyles={[styles.boxStyles, {/*backgroundColor: 'yellow'*/}]}
            inputStyles={[styles.inputStyles, {/*backgroundColor: 'green'*/}]}
            dropdownStyles={[styles.dropdownStyles, {/*backgroundColor:'blue'*/}]}
            dropdownItemStyles={styles.dropdownItemStyles}
            badgeStyles={styles.badgeStyles}
          />
          <TouchableOpacity style={styles.btnSave} onPress={props.handleModal}>
            <Text style={styles.textSave}>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: GLOBAL_COLOR.SECONDARY,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  headerTitle: {
    color: GLOBAL_COLOR.TERTIARY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: '10%',
    paddingBottom: 20,
  },
  boxStyles: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 0,
  },
  dropdownStyles: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderWidth: 0,
  },
  inputStyles: {
    height: 26,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor : GLOBAL_COLOR.SECONDARY,
  },
  dropdownItemStyles: {
    //backgroundColor: 'red',
  },
  textList: {
    fontSize: 16,
  },
  badgeStyles: {
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  btnSave: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: GLOBAL_COLOR.PRIMARY,
  },
  textSave: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
