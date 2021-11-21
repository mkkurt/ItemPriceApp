import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import nextId from 'react-id-generator';

const AddItem = () => {
  const [addTitle, setAddTitle] = useState('');
  const [addPrice, setAddPrice] = useState('');

  const handleAddItem = async () => {
    //TODO Check price is a number and title is not empty
    if (addTitle === '' || addPrice === '' || isNaN(addPrice)) {
      alert('Please fill all fields correctly');
    } else {
      let newId = nextId();
      let newItem = {
        id: newId,
        title: addTitle,
        price: addPrice,
      };
      let jsonItem = JSON.stringify(newItem);
      try {
        await AsyncStorage.setItem(newId, jsonItem);
      } catch (e) {
        console.log(e);
      }
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>Name</Text>
        <TextInput
          style={styles.fieldInput}
          onChangeText={text => setAddTitle(text)}>
          {addTitle}
        </TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>Price</Text>
        <TextInput
          style={styles.fieldInput}
          onChangeText={text => setAddPrice(text)}>
          {addPrice}
        </TextInput>
      </View>
      <TouchableOpacity style={styles.add} onPress={handleAddItem}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 10,
  },
  field: {
    backgroundColor: 'red',
  },
  fieldTitle: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fieldInput: {
    backgroundColor: 'green',
  },
  add: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderRadius: 7,
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddItem;
