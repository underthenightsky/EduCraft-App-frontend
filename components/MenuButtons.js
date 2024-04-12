import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity ,
ScrollView} from 'react-native';
import { AntDesign,Entypo,FontAwesome5,createIconSet } from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import { MeetingRoom } from '../screens/MeetingRoom';

export default function MenuButtons({navigation}) {
  router= useRouter();
  const  startMeeting=({navigation})=>{
    console.log('start meeting')
    navigation.navigate('MeetingRoom')
    // router.push("./MeetingRoom.js").canGoBack(true)
    // router.push("../screens/MeetingRoom.js")
    // return (
    //   <MeetingRoom/>
    // )
  }
  const  doNothing = ()=>{
    console.log('do nothing')
  }
  const buttons = [
    {
      id: 1,
      title: 'New Meeting',
      icon: 'video',
      color: 'orange',
      iconFamily: FontAwesome5,
      onPress : startMeeting
    },
    {
      id: 2,
      title: 'Join',
      icon: 'plus-square',
      color: 'blue',
      iconFamily: FontAwesome5,
      onPress : doNothing
    },
    {
      id: 3,
      title: 'Share Screen',
      icon: 'upload',
      color: 'green',
      iconFamily: FontAwesome5,
      onPress : doNothing
    },
    {
      id: 4,
      title: 'Schedule Meeting',
      icon: 'calendar',
      color: 'purple',
      iconFamily: FontAwesome5,
      onPress : doNothing
    },
  ];

  
  return (
    <View style={styles.container}>
      
      {buttons.map((button,index) => 
        <View style={styles.buttons}
        key ={index}>
          
        <TouchableOpacity
        onPress={button.onPress }
        
        style ={{...styles.button,
          backgroundColor:button.color}}>
      <FontAwesome5 name={button.icon} size={24} color="white"
      // backgroundColor='orange' 
      />
      </TouchableOpacity>
      <Text style={{color: 'white'}}>{button.title}</Text>
      </View>
    )}
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      flexDirection: 'row',
      // backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: 10,
    },
    button: {
      // backgroundColor: 'orange',
      height: 50,
      width: 50,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttons:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
    }
  });
