import React from 'react';
import {Text, View, Image} from 'react-native';
import {Feather} from '@expo/vector-icons'

const Header = ()=>{
    return(
        <View style={{padding:30}}>
            <View style={{paddingTop:-5, flexDirection:"row", height:30}}>
                <Feather style={{paddingTop:10}} 
                name="align-left"
                size={24}
                color="black"
                />
                <Image source={require('../../assets/images.jpeg')} style={{width:30, height:30, borderRadius:30, marginLeft:"80%", marginTop:8}}/>
            </View>
        </View>
    )
}

export default Header;