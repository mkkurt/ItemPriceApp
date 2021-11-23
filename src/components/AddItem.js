import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import nextId from 'react-id-generator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getTime from '../utils/getTime.js';
import sortList from '../utils/sortList';

const AddItem = props => {
  const [addTitle, setAddTitle] = useState('');
  const [addPrice, setAddPrice] = useState('');

  const handleAddItem = async () => {
    if (addTitle === '' || addPrice === '' || isNaN(addPrice)) {
      alert('Please fill all fields correctly');
    } else {
      let newId = nextId();
      const time = getTime();
      let newItem = {
        id: newId,
        title: addTitle,
        price: parseInt(addPrice, 10),
        date: time,
      };
      let jsonItem = JSON.stringify(newItem);
      await AsyncStorage.setItem(newId, jsonItem);
      // props.setItems([...props.items, newItem]);
      console.log(props.selected);
      //Sort items
      const doSortList = () => {
        switch (props.selected) {
          case 1:
            props.setItems(prevState =>
              sortList.incPrice([...prevState, newItem]),
            );
            break;
          case 2:
            props.setItems(prevState =>
              sortList.decPrice([...prevState, newItem]),
            );
            break;
          case 3:
            //Implement date sorting
            props.setItems(prevState =>
              sortList.byTime([...prevState, newItem]),
            );
            break;
        }
      };
      doSortList();
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
    padding: 10,
    borderTopColor: '#EDEEF3',
    borderTopWidth: 1,
  },
  field: {
    // backgroundColor: '#CFD6DC',
    marginBottom: 10,
  },
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  fieldInput: {
    backgroundColor: '#EDEEF3',
    height: 30,
    padding: 5,
  },
  add: {
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#485964',
    padding: 5,
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddItem;
