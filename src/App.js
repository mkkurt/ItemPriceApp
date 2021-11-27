import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';
import UpperMenu from './components/UpperMenu';
import Item from './components/Item';
import AddItem from './components/AddItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sortList from './utils/sortList';

const App = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(1);

  const [isPanelActive, setIsPanelActive] = useState(false);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onlySmall: Platform.OS === 'ios' ? false : true,
    openLarge: Platform.OS === 'ios' ? true : false,
    showCloseButton: true,
    closeOnTouchOutside: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });
  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  const doSortList = () => {
    console.log('Sorting..');
    switch (selected) {
      case 1:
        setItems(i => sortList.incPrice(i));
        break;
      case 2:
        setItems(i => sortList.decPrice(i));
        break;
      case 3:
        //Implement date sorting
        setItems(i => sortList.byTime(i));
        break;
    }
  };
  useEffect(() => {
    doSortList();
  }, [selected]);

  useEffect(() => {
    async function fetchData() {
      let data = await getAsyncStore();
      setItems(data);
    }
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      price={item.price}
      date={item.date}
      id={item.id}
      deleteItemById={deleteItemById}
    />
  );

  const deleteItemById = async id => {
    try {
      await AsyncStorage.removeItem(id);
    } catch (err) {
      console.log('removeasyncError:' + err);
    }
    const filteredData = items.filter(item => item.id !== id);
    setItems(filteredData);
  };

  const getAsyncStore = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log('All Keys:', keys);
      //Check for id prefix because expoSnack uses its own asyncStorage stuff too
      keys = keys.filter(k => k.startsWith('id'));
      console.log('Filtered Keys:', keys);
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

  const removeAllAsyncStoreItems = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    await AsyncStorage.multiRemove(keys);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={styles.main}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <UpperMenu selected={selected} setSelected={setSelected} />
        <View style={styles.flatListStyle}>
          {items.length == 0 ? (
            <Text style={styles.emptyListView}>Start adding items 🎈</Text>
          ) : (
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={{flex: 1}}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsPanelActive(true)}>
          <Text style={{fontSize: 50}}>+</Text>
        </TouchableOpacity>
        <SwipeablePanel {...panelProps} isActive={isPanelActive}>
          <AddItem
            items={items}
            setItems={setItems}
            selected={selected}
            setSelected={setSelected}
          />
        </SwipeablePanel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  flatListStyle: {
    flex: 1,
    width: '100%',
  },
  addButton: {
    backgroundColor: 'crimson',
    width: '100%',
    alignItems: 'center',
  },
  emptyListView: {
    display: 'flex',
    textAlign: 'center',
  },
});

export default App;
