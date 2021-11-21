import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Item = props => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Item;
