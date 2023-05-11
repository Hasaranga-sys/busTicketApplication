import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    Keyboard,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
export default function SignInpage() {
  return (
    <ScrollView style={styles.main_container}>
    <View style={{ marginBottom: 30 }}>
      <Text style={styles.header_text}>Create an Account</Text>
    </View>
    <Text style={styles.input_lable}>Full name</Text>
    <TextInput
      style={styles.input_text}
      placeholder="Enter Full name"
      onChangeText={(val) => handleChangeText("username", val)}
    ></TextInput>
    <Text style={styles.input_lable}>Email</Text>
    <TextInput
      style={styles.input_text}
      keyboardType="email-address"
      placeholder="Enter Email"
      onChangeText={(val) => handleChangeText("email", val)}
    ></TextInput>
    <Text style={styles.input_lable}>Password</Text>
    <TextInput
      style={styles.input_text}
      secureTextEntry={true}
      placeholder="Enter password"
      onChangeText={(val) => handleChangeText("password", val)}
    ></TextInput>

    <TouchableOpacity
      style={{
        alignContent: "center",
        marginTop: 20,
        backgroundColor: "#0D47A1",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
      }}
      onPress={() => signin()}
      underlayColor="#0084fffa"
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
        SIGN UP
      </Text>
    </TouchableOpacity>
  </ScrollView>
  )
}

