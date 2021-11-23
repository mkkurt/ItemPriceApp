import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const UpperMenu = props => {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={
          props.selected === 1
            ? styles.selectedButtonWrapper
            : styles.buttonWrapper
        }
        onPress={() => props.setSelected(1)}>
        <Text
          style={
            props.selected === 1 ? styles.selectedButtonText : styles.buttonText
          }>
          Artan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.selected === 2
            ? styles.selectedButtonWrapper
            : styles.buttonWrapper
        }
        onPress={() => props.setSelected(2)}>
        <Text
          style={
            props.selected === 2 ? styles.selectedButtonText : styles.buttonText
          }>
          Azalan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          props.selected === 3
            ? styles.selectedButtonWrapper
            : styles.buttonWrapper
        }
        onPress={() => props.setSelected(3)}>
        <Text
          style={
            props.selected === 3 ? styles.selectedButtonText : styles.buttonText
          }>
          Tarih
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    padding: 4,
    margin: 10,
    width: '26%',
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: '#CFD6DC',
    borderColor: '#919699',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#919699',
  },
  selectedButtonWrapper: {
    padding: 4,
    margin: 10,
    width: '26%',
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  selectedButtonText: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

export default UpperMenu;
