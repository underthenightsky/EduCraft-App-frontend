import {View ,Text,StyleSheet} from 'react-native'; 
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

export default function Home() {  
  return (
    <View style = {styles.container}>
     < Header />
      <SearchBar/>
      <MenuButtons/>
     < ContactsMenu/>
    </View>
  );
 } 

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    // alignItems: 'center',
    justifyContent: 'center',
  },  
});