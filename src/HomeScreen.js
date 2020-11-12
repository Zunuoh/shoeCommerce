import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import Header from '../src/header/header';
import {Feather} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const shoeList=[{"id":0, "price":"GHC450", "picture":require('../assets/shoe1.jpeg')},{"id":1, "price":"GHC350", "picture":require('../assets/shoe2.jpeg')},{"id":2, "price":"GHC450", "picture":require('../assets/shoe3.jpeg')},
{"id":3, "price":"GHC450", "picture":require('../assets/shoe3.jpeg')}, {"id":4, "price":"GHC550", "picture":require('../assets/shoe4.jpeg')}, {"id":5, "price":"GHC450", "picture":require('../assets/shoe1.jpeg')}]

const PAGE_SHOES = 'shoes';
const PAGE_CART = 'cart';
const HomeScreen = ({navigation, route})=>{
    const [shoes, setShoes] = useState(shoeList);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('shoes')
    // listen to the route params
     
    const addToCart =(shoe)=>{
        console.log("hi");
      setCart([...cart, shoe]);
    }

    const navigateTo = (nextPage)=>{
        setPage(nextPage);
    }
    
    const delItem =(id)=>{
        setShoes((prevItems)=>{
           return prevItems.filter(shoe=>shoe.id != id)
        })
    }
 
    const renderProducts = ()=>
    <>
             <View style={{flexWrap:"wrap", flexDirection:"row"}}>
            {shoes && shoes.map((shoe, index)=>{
            return(
            <View key={index} style={{marginTop:30, backgroundColor:"white", marginLeft:28, borderRadius:20, width:140, height:200}}>
            <Image source={shoe.picture} style={{width:140, height:200, resizeMode:"contain", marginTop:-30, borderTopLeftRadius:30}}/>
            <Text style={{display:"flex",justifyContent:"center", alignItems:"center", paddingLeft:30, marginTop:-30, fontSize:18, fontWeight:"500"}}>{shoe.price}</Text>
            {/* <TouchableOpacity style={{width:70, height:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#DBF0F8", borderRadius:"30", marginLeft:40, marginTop:5}} 
          onPress={()=>{delItem(shoe.id)}}>
             onPress={()=>{navigation.navigate('Cart', this.props.shoe)}}
                <Text style={{fontWeight:"600"}}>ADD</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={{width:70, height:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#DBF0F8", borderRadius:"30", marginLeft:40, marginTop:5}} 
          onPress={()=>addToCart(shoe)}>
             {/* onPress={()=>{navigation.navigate('Cart', this.props.shoe)}} */}
                <Text style={{fontWeight:"600"}}>ADD</Text>
            </TouchableOpacity>
            </View>
           
            // <Text>hi</Text>
                )

            })}
               </View>
            
            </>

            const renderCart =()=>
                <>
             <View style={{flexWrap:"wrap", flexDirection:"row"}}>
            {cart && cart.map((shoe, index)=>{
            return(
            <View key={index} style={{marginTop:30, backgroundColor:"white", marginLeft:28, borderRadius:20, width:140, height:200}}>
            <Image source={shoe.picture} style={{width:140, height:200, resizeMode:"contain", marginTop:-30, borderTopLeftRadius:30}}/>
            <Text style={{display:"flex",justifyContent:"center", alignItems:"center", paddingLeft:30, marginTop:-30, fontSize:18, fontWeight:"500"}}>{shoe.price}</Text>
            {/* <TouchableOpacity style={{width:70, height:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#DBF0F8", borderRadius:"30", marginLeft:40, marginTop:5}} 
          onPress={()=>{delItem(shoe.id)}}>
             onPress={()=>{navigation.navigate('Cart', this.props.shoe)}}
                <Text style={{fontWeight:"600"}}>ADD</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={{width:70, height:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#DBF0F8", borderRadius:"30", marginLeft:40, marginTop:5}} 
        //   onPress={()=>addToCart(shoe)}
          >
             {/* onPress={()=>{navigation.navigate('Cart', this.props.shoe)}} */}
                <Text style={{fontWeight:"600"}}>ADD</Text>
            </TouchableOpacity>
            </View>
           
            // <Text>hi</Text>
                )

            })}
               </View>
            
            </>


            
    
    return(
        <View style={{flex:1, padding:10, backgroundColor:"#DBF0F8", paddingBottom:70}}>
            <View>
            <Header/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:1, flexDirection:"row"}}>
            <TextInput style={{borderRadius:20, backgroundColor:"white", height:20, padding:20, width:270}}
                placeholder="Search"
                />
            <View style={{backgroundColor:"#5AD8DF", justifyContent:"center", alignItems:"center", marginLeft:20, borderRadius:30}}>
            <Feather style={{paddingLeft:10, paddingRight:10, marginTop:5}}
            name="search"
            size={24}
            color="white"/>
            </View>    
            </View>

            <View style={{marginTop:5, display:"flex", flexDirection:"row"}}>
                <Text style={{fontSize:40, fontWeight:"700", paddingLeft:20}}>Categories</Text>
                <View onPress={()=>navigateTo(PAGE_CART)}>
                <Text  style={{paddingLeft:80, paddingRight:10, marginTop:10}}>
                <Feather
            name="shopping-cart"
            size={24}
            color="black"/>({cart.length})
            </Text>
                </View>
                
            </View>

            <View style={{flexDirection:"row", paddingTop:20, paddingLeft:20}}>
                <Text style={{fontWeight:"700"}}>Nike</Text>
                <Text style={{paddingLeft:20, fontWeight:"700"}}>Adidas</Text>
                <Text style={{paddingLeft:20, fontWeight:"700"}}>Puma</Text>
                <Text style={{paddingLeft:20, fontWeight:"700"}}>Balenciaga</Text>
                <Text style={{paddingLeft:20, fontWeight:"700"}}>Converse</Text>
            </View>
            {page === PAGE_SHOES && renderProducts()} 
            {page === PAGE_CART && renderCart()}  
           
               </ScrollView>

            {/* <View style={{width:150, height:200, marginTop:30, backgroundColor:"red", borderRadius:20}}>
                <Image source={require('../assets/shoe1.jpeg')} style={{width:80, height:80}}/>
            </View> */}
         
           
           
           
           
                
        </View>
    )
}

export default HomeScreen;