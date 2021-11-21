import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import UpperMenu from './components/UpperMenu';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <UpperMenu />
      <ItemList />
      <AddItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gray',
  },
});

export default App;
