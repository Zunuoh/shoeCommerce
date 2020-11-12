import React from 'react';
import {View, Text} from 'react-native';

import SplashScreen from '../src/SplashScreen';
import LoginScreen from '../src/LoginScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;