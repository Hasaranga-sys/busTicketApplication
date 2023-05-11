import { ScrollView, StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from '../helpers/axiosInstance';

export default function AllBookingsList() {
  
  const [data, setData] = useState([])
    // const [data, setData] = useState([
    //     { id: 1, name: 'Item 1' },
    //     { id: 2, name: 'Item 2' },
    //     { id: 3, name: 'Item 3' },
    //     { id: 4, name: 'Item 4' },
    //     { id: 5, name: 'Item 5' },
    //     { id: 6, name: 'Item 6' },
    //     { id: 7, name: 'Item 7' },
    //     { id: 8, name: 'Item 8' },
    //     { id: 9, name: 'Item 9' },
    //     { id: 10, name: 'Item 10' },
    //   ]);

    //   useEffect(()=>{      
    //     axios.post('http://192.168.43.172:6000/api/bookings/get-bookings-by-user-id').then(response => {
    //       setData(response.data.data);
        
    //         console.log(response.data.data);
    //         console.log("hellow");
    //         console.log('This is my log message');
    //     }).catch(error => {
    //         console.log("error")
    //         console.log(error);
    //     })
    // },[])

    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const token = await AsyncStorage.getItem('authToken'); // Retrieve the JWT token from AsyncStorage or any other storage mechanism
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          const response = await axiosInstance.post('http://192.168.43.172:6000/api/bookings/get-bookings-by-user-id', {}, { headers });
          setData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchBookings();
    }, []);

      


      const renderItem = ({ item }) => (
        
        <View style={{padding:10,borderWidth:2, borderColor:"#000",margin:10, borderRadius:10}}>
          <View style={{borderBottomWidth:1,borderColor:"#B2B2B2", paddingVertical:5,flexDirection:"row", justifyContent:"space-between"}}>

              <Text style={{flex: 0.5}}>Bus Name : {item.departure}</Text>
              <Text style={{flex: 0.5}}>Bus Number : {item.departure}</Text>
          </View>
          <View style={{paddingTop:15}}>
        <Text style={{flex: 1}}>Journey Date: {item.departure}</Text>
</View>
        <View style={{paddingTop:15}}>
        <Text style={{flex: 1}}>Journey Time: {item.departure}</Text>
          </View>
          <View style={{flexDirection:"row", paddingVertical:10, justifyContent:'space-between', alignItems:"center"}}>
          <Text style={{flex: 1}}>Seats: {item.departure}</Text>
        <TouchableOpacity style={{ alignItems: 'center',
                                  backgroundColor: '#90B77D',
                                  padding: 7,
                                  borderRadius:10,borderBottomWidth:1,borderColor:"#000"}}>
      <Text>Print Ticket</Text>
    </TouchableOpacity>
          </View>
        </View>
      
    );
  return (
    <View>
      <View style={styles.box1}>
        <Text style={styles.boxTitle}>Booking List</Text>
      </View>

    <ScrollView> 
      <FlatList
      style={styles.box}
            data={data}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id.toString()}
            keyExtractor={item => item._id}
        /> 
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
          
    //borderBottomLeftRadius:10,

    //justifyContent: 'center',
    //alignItems: 'center',            
    //top:10
  },
  box1:{
    width: '98%',
    marginLeft:3,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    height: 100,
    backgroundColor: '#90B77D',
    justifyContent:'center',
    alignContent:'center'

  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:136
    
  },

})