import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home';
import MeetingRoom from "./screens/MeetingRoom";

function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
            <Stack.Screen name='Room'component={MeetingRoom} 
            options={{
                title: "Start A Meeting",
                headerStyle:{
                    backgroundColor:"#1c1c1c",
                    shadowOpacity:0

                },
                headerTintColor:"white"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
