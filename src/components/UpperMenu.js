import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const UpperMenu = () => {
  const [selected, setSelected] = useState(1);
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={selected === 1 ? styles.selectedButton : styles.buttonWrapper}
        onPress={() => setSelected(1)}>
        <Text style={styles.buttonText}>Artan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected === 2 ? styles.selectedButton : styles.buttonWrapper}
        onPress={() => setSelected(2)}>
        <Text style={styles.buttonText}>Azalan Fiyat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected === 3 ? styles.selectedButton : styles.buttonWrapper}
        onPress={() => setSelected(3)}>
        <Text style={styles.buttonText}>Tarih</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
  },
  selectedButton: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: 'gray',
  },
});

export default UpperMenu;
