import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons  } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      <Text style ={styles.heading}>Meet and Chat</Text>
      <AntDesign name="edit" size={24} color="white" />
     
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      flexDirection:'row',
    //   backgroundColor: 'white',
    // works for the axis perpendicular to the flexDirection    
      alignItems: 'center', 
      justifyContent: 'space-between',
      // add some space to the top and bottom of the screen
      paddingVertical:20,
      paddingBottom: 5,
      // add some space to the left and right of the screen
      paddingHorizontal:20,
    },
    heading :{
      color: 'white',
      fontSize: 24,
      fontWeight: '300'
    }
  });