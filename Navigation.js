import { createStackNavigator } from "@react-navigation/stack";
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

export default function Navigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MeetingRoom" component={MeetingRoom} />
       {/* < Stack.Screen name="../components/MenuButtons" component={MenuButtons} /> */}
       {/* < Stack.Screen name="../components/MenuButtons" component={MenuButtons} /> */}
       {/* < Stack.Screen name="../components/MenuButtons" component={MenuButtons} /> */}

        </Stack.Navigator>
        </NavigationContainer>
    );
}