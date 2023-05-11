import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { useDispatch } from 'react-redux';
  import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

  import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = async (values) => {
      try {
        dispatch(ShowLoading());
        const response = await axios.post("http://192.168.43.172:6000/api/users/login", values);
        dispatch(HideLoading());
        if (response.data.success) {
          alert(response.data.message);
          AsyncStorage.setItem("token", response.data.data);
          navigation.navigate('ClientHome');
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        alert(error.message);
      }
    };

    const handleLogin = async () => {
      try {
        // dispatch(ShowLoading());
        const response = await axios.post("http://192.168.43.172:6000/api/users/login", {
          email: email,
          password: password
        });
        // dispatch(HideLoading());
        if (response.data.success) {
          alert(response.data.message);
          await AsyncStorage.setItem("token", response.data.data);
          navigation.navigate('ClientHome');
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        // dispatch(HideLoading());
        alert(error.message);
      }
    };

  return (
    <ScrollView style={styles.main_container}>
    <View style={{ marginBottom: 50 }}>
      <Text style={styles.header_text}>Welcome to GoBus</Text>
      <Text style={{ color: "#130160", textAlign: "center", fontSize: 17 }}>
        Login to Continoue
      </Text>
    </View>
    <View>
      <Text style={styles.input_lable}>Email</Text>
      <TextInput
        style={styles.input_text}
        keyboardType="email-address"
        placeholder="Enter email"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <Text style={styles.input_lable}>Password</Text>
      <TextInput
        style={styles.input_text}
        secureTextEntry={true}
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>

      <TouchableOpacity
        style={{
          alignContent: "center",
          marginTop: 35,
          backgroundColor: "#0D47A1",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
        onPress={() => handleLogin()}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#130160",
            fontSize: 17,
            textAlign: "center",
            marginRight: 7,
          }}
        >
          You don't have an account yet?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text
            style={{
              fontWeight: "bold",
              opacity: 0.6,
              fontSize: 17,
              color: "#1565C0",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      top: 50,
      margin: 15,
    },
    header_text: {
      fontSize: 30,
      fontWeight: "700",
      color: "#130160",
      textAlign: "center",
    },
    input_text: {
      fontSize: 17,
      borderColor: "#67afff",
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 10,
      paddingLeft: 10,
      marginVertical: 5,
    },
    input_lable: {
      color: "#0D0140",
      marginVertical: 5,
      fontWeight: "bold",
      fontSize: 20,
    },
  });
  