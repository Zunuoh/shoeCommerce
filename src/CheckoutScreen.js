import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CheckoutScreen = ({navigation, route})=>{
    return(
       <View style={{flex:1, padding:40, backgroundColor:"#FAF6F9"}}>
           <View style={{paddingTop:30, justifyContent:"center", alignItems:"center"}}>
               <Text style={{fontWeight:"bold", fontSize:30}}>PAYMENT METHOD</Text>
           </View>

           <View style={{width:300, height:80, backgroundColor:"#FEFDFD", marginTop:30, borderWidth:1, borderRadius:10, borderColor:"#FEFDFD", justifyContent:"center", paddingLeft:20}}>
              <Text style={{fontSize:20}}>Visa Payment</Text>
           </View>

           <View style={{width:300, height:80, backgroundColor:"#FEFDFD", marginTop:30, borderWidth:1, borderRadius:10, borderColor:"#FEFDFD", justifyContent:"center", paddingLeft:20}}>
              <Text style={{fontSize:20}}>Visa Payment</Text>
           </View>

           <View style={{width:300, height:80, backgroundColor:"#FEFDFD", marginTop:30, borderWidth:1, borderRadius:10, borderColor:"#FEFDFD", justifyContent:"center", paddingLeft:20}}>
              <Text style={{fontSize:20}}>Visa Payment</Text>
           </View>

           <View style={{backgroundColor:"#FEFDFD", width:300, height:180, marginTop:20, borderRadius:10, padding:15}}>
               <Text style={{fontSize:20, fontWeight:"bold"}}>Shopping Bill</Text>
               <View style={{flexDirection:"row", paddingTop:10}}>
                   <Text style={{flex:5}}>Discount 10%</Text>
                   <Text style={{flex:1}}>-$1.89</Text>
               </View>
               <View style={{flexDirection:"row", paddingTop:10}}>
                   <Text style={{flex:5}}>Price Total</Text>
                   <Text style={{flex:1}}>$8.99</Text>
               </View>
               <View style={{flexDirection:"row", paddingTop:10}}>
                   <Text style={{flex:5}}>Shopping fee</Text>
                   <Text style={{flex:1}}>$12.99</Text>
               </View>
               <View style={{width:270, height:1, backgroundColor:"black", marginTop:20}}/>
                 <View style={{flexDirection:"row", paddingTop:20}}>
                   <Text style={{flex:5, fontWeight:"bold"}}>Total</Text>
                   <Text style={{flex:1, fontWeight:"bold"}}>$88.36</Text>
               </View>
           </View>

           <TouchableOpacity style={{width:290, height:50, backgroundColor:"#DBF0F8", justifyContent:"center", alignItems:"center", marginTop:20, borderRadius:20}}>
               <Text style={{fontWeight:"bold", fontSize:20}}>Buy Now</Text>
           </TouchableOpacity>

       </View>
    )
        
        
}

export default CheckoutScreen;