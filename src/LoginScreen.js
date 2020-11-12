import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';

// import {AuthContext} from '../src/Context/globalContext'

const LoginScreen = ({navigation})=>{
    const[name, setName] = useState("");
    // const {signIn} React.useContext(AuthContext);
    return(
        <View style={{flex:1, padding:30, backgroundColor:"#DBF0F8"}}>
            <View style={{paddingTop:"50%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:60, fontWeight:"600"}}>Hello </Text>
            <Text style={{fontWeight:"600", fontSize:20}}>Sign in to your account</Text>
            </View>

            <View style={{marginTop:60}}>
                <TextInput style={{borderRadius:10, backgroundColor:"white", height:40, padding:20}}
                placeholder="Username"
                // value={name}
                // onChangeText={(e)=>setName(e)}
                // clearTextOnFocus={true}
                
                />
                

            <TextInput style={{borderRadius:10, backgroundColor:"white", height:40, padding:20, marginTop:30}}
                placeholder="Password"
                secureTextEntry={true}
                />
            </View>

            <View style={{paddingTop:20, paddingLeft:"67%"}}>
                <Text>Forgot password?</Text>
            </View>
            
            <View style={{flexDirection:"row", paddingTop:"40%", paddingLeft:"55%"}}>
                <View>
                <Text style={{fontSize:30, fontWeight:"600"}}>Sign in</Text>
                </View>
                <View style={{backgroundColor:"white", height:60,width:60, padding:15, borderRadius:30, marginLeft:10, marginTop:-15}}>
                <Feather onPress={()=>{navigation.navigate("Checkout")}}
                name="arrow-right"
                size={30}
                color="black"/>
                </View>
               
            </View>
            
        </View>
    )
}

export default LoginScreen;