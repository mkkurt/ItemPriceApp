import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Item(props) {
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => props.deleteItemById(props.id)}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.leftSide}>
        <Text style={styles.price}>{props.price} TL</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEEF3',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  leftSide: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 12,
    fontWeight: '700',
  },
  date: {
    fontSize: 10,
    fontWeight: '300',
  },
});
