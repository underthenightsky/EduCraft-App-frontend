import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image
,TextInput} from 'react-native';
import { useState } from 'react';
import {FontAwesome5} from '@expo/vector-icons';

export default function SearchBar() {
  const[search, setSearch] = useState('');
  return (
    <View style={styles.container}>

      <FontAwesome5 name="search" size={30} 
      color="white" style={styles.icon} />
      {/* <Image source={{uri:'../assets/search.png'}}
      style ={styles.image}/> */}
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
        placeholderTextColor={'black'}
        // borderBottomWidth="0"
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    backgroundColor: 'grey',
    flex: 1,
  },
  icon: {
    margin: 10,
    height: 30,
    width: 30,
  },
  image :{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  }
});
