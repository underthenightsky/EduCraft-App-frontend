import {View ,Text,StyleSheet} from 'react-native';

export default function MeetingRoom() { 
    return (
        <View style = {styles.container}>
         <Text>Meeting Room</Text>
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
