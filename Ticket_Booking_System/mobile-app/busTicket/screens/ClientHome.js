import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    ImageBackground,
  } from "react-native";
  import React, { useEffect, useState } from 'react';
import { FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

import { useNavigation } from "@react-navigation/native";



export default function ClientHome() {
    const navigation = useNavigation();
   

    const [data, setData] = useState([])
    // const [data, setData] = useState([
    //   { id: 1, name: 'Item 1' },
    //   { id: 2, name: 'Item 2' },
    //   { id: 3, name: 'Item 3' },
    //   { id: 4, name: 'Item 4' },
    //   { id: 5, name: 'Item 5' },
    //   { id: 6, name: 'Item 6' },
    //   { id: 7, name: 'Item 7' },
    //   { id: 8, name: 'Item 8' },
    //   { id: 9, name: 'Item 9' },
    //   { id: 10, name: 'Item 10' },
    // ]);

    const getBookings = async () =>{
      try {
        
      } catch (error) {
        
      }
    }


    useEffect(()=>{      
        axios.post('http://192.168.43.172:6000/api/buses/get-all-buses').then(response => {
          setData(response.data.data);
            console.log(response.data.data);
            console.log("hellow");
            console.log('This is my log message');
        }).catch(error => {
            console.log("error")
            console.log(error);
        })
    },[])

     
    

    const renderItem = ({ item }) => (        
          <View style={{padding:10,borderWidth:2, borderColor:"#000",margin:10, borderRadius:10}}>
            <View style={{borderBottomWidth:1,borderColor:"#B2B2B2", paddingVertical:5}}>

                <Text>{item.name}</Text>
            </View>
            <View style={{borderBottomWidth:1,borderColor:"#B2B2B2",flexDirection:"row", justifyContent:"space-between",paddingVertical:10}}>

          <Text>To: {item.to}</Text>
          <Text>From: {item.from}</Text>
          <Text>Fare: {item.fare}</Text>
            </View>
            <View style={{flexDirection:"row", paddingVertical:10, justifyContent:'space-between', alignItems:"center"}}>
          <Text>Journey Date : {item.journeyDate}</Text>
          <TouchableOpacity style={{ alignItems: 'center',
                                    backgroundColor: '#90B77D',
                                    padding: 7,
                                    borderRadius:10,borderBottomWidth:1,borderColor:"#000"}}>
        <Text>Press Here</Text>
      </TouchableOpacity>
            </View>
          </View>
        
      );
  return (
  
    <ScrollView
    style={{ backgroundColor: "#fff", flex: 1, paddingHorizontal: 10 }}
  >
    
    <View>     
      <Image
       source={require("../assets/busWall.jpg")}
       style={styles.image}>   
       </Image>

       <TextInput
                style={[styles.searchBar, { backgroundColor: '#fff' }]}
                onChangeText={query => setSearchQuery(query)}
                // value={searchQuery}
                placeholder="Search..."
      />
    </View>
    <View>
    <TouchableOpacity style={{ alignItems: 'center',
                                    backgroundColor: '#90B77D',
                                    padding: 7,
                                    margin:10,
                                    borderRadius:5,borderBottomWidth:1,borderColor:"#000"}}
                                    onPress={()=>navigation.navigate('AllBookingsList')}>
        <Text style={{}}>Booking List</Text>
      </TouchableOpacity>
    </View>

   
    <View style={styles.box1}> 
    <Text style={styles.boxTitle}>Bus List</Text>
      
      <FlatList
      style={styles.box}
            data={data}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id.toString()}
            keyExtractor={item => item._id}
        /> 
    </View>
 
    
    
    

  </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    // adminHeader: {
    //   height: 100,
    //   borderBottomEndRadius: 20,
    //   borderBottomLeftRadius: 20,
    //   backgroundColor: "#0030FF",
    //   padding: 10,
    // },
    box: {
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height:300,         
        //borderBottomLeftRadius:10,

        //justifyContent: 'center',
        //alignItems: 'center',            
        //top:10
      },
      box1:{
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height:400,
        padding:15 
      },

      boxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width:220,
       top:10,
       marginLeft:80,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#333'    
      },


    headerText: {
      color: "#fff",
      fontSize: 25,
      fontWeight: "bold",
    },
    header2Text: {
      marginLeft: 10,
      marginVertical: 25,
      fontSize: 20,
      fontWeight: "bold",
    },
    card: {
      flexDirection: "row",
      width: 200,
      overflow: "hidden",
      margin: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: "100%",
      height: 200,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      resizeMode: "cover",
      zIndex: 2,
      justifyContent: 'center',
      
    },
    cardContent: {
      flex: 1,
      marginVertical: 10,
      justifyContent: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 10,
    },
    subtitle: {
      fontSize: 14,
      marginHorizontal: 10,
      color: "#888",
    },
    date: {
      textAlign: "right",
      fontSize: 14,
      color: "#999999",
      margin: 10,
    },
    price: {
      fontSize: 16,
      color: "#FE3A30",
      fontWeight: "bold",
      marginHorizontal: 10,
      marginTop: 10,
    },
  });