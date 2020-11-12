import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import Header from './src/header/header';
import CheckoutScreen from './src/CheckoutScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootStack from './src/RootStack';
import SplashScreen from 'react-native-splash-screen';

import {AuthContext} from './src/Context/globalContext';

const Stack = createStackNavigator();


export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // const authContext = React.useMemo(()=>({
  //  signIn: ()=>{
  //    setUserToken('jjj');
  //    setLoading(false);
  //  },
  //  signOut: ()=>{
  //    setUserToken(null);
  //    setLoading(false);
  //  },
  //  signUp: ()=>{
  //    setUserToken('jdj');
  //    setLoading(false);
  //  },
  // }));

  // useEffect(()=>{
  //     setTimeout(()=>{
  //       setLoading(false);
  //     }, 1000);
  // }, []);

  // if(isLoading){
  //   return(
  //     <View>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   )
  // }

  
  return (
    // <AuthContext.Provider value={authContext}>
       <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Header" component={Header} options={{headerShown:false}}/>
       <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown:false}}/>
     </Stack.Navigator>
   </NavigationContainer>
    // </AuthContext.Provider>
  
  //  <HomeScreen/>
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
