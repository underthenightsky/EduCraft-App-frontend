import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Stack} from 'expo-router';
import Home from './screens/Home';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import Navigation from 'Navigation';


export default function App() {
  return (    
       <Navigation/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
