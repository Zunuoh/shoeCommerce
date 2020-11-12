import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
const { Fragment } = require("react")

const CartScreen = ({navigation, route})=>{
    const [shoes, setShoes] = useState(null);
    // const {shoe} = route.params;
    // console.log(shoe?.name)
    useEffect(()=>{
        if(route.params){
            setShoes(route.params?.shoes)
        }
    },[route])
    console.log(route.params?.shoes);
    return(
        // <View style={{flex:1, padding:60}}>
        //     <Text>Cart Screen</Text>

        //     <View style={{ paddingTop:40}}>
        //     {route.params?.shoe?.name}
            
        // </View>
        
        <Fragment style={{paddingTop:80}}>
            <Text>{shoes?.name}</Text>
        </Fragment>
        // </View>
    )
        
        
}

export default CartScreen;