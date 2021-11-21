import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from './Item';

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const storeItems = await getStoreItems();
    setItems(storeItems);
  }
  //Get items from local storage
  const getStoreItems = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    let valuesAsObj = [];
    for (let i = 0; i < keys.length; i++) {
      await AsyncStorage.getItem(`${keys[i]}`, (error, result) => {
        error ? console.log(error) : null;
        valuesAsObj.push(JSON.parse(result));
      });
    }
    return valuesAsObj;
  };

  const removeStoreItems = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    await AsyncStorage.multiRemove(keys);
  };

  //Create item element for each item in the items array
  const itemElements = items.map(item => {
    return <Item key={item.id} title={item.title} price={item.price} />;
  });

  return <ScrollView style={styles.main}>{itemElements}</ScrollView>;
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
});
