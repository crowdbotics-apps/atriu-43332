import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><TextInput style={styles.kyZbrGPb} data={Signups}></TextInput></View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
        navigation.navigate("ScreenAI2Copy1");
      }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><TextInput style={styles.zPnXAOva} data={Signups}></TextInput><Text style={styles.CYOnXYQR}>{"Atriu.net Copyright 2023"}</Text><Text style={styles.AZIgawIW}>{"Password"}</Text><Text style={styles.LzpQyiVZ}>{"Email"}</Text><TextInput style={styles.qliKQRGr} data={Signups}></TextInput><Text style={styles.WzPGuFHM}>{"Username"}</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e"
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 58,
    height: 55,
    borderRadius: 75,
    position: "absolute",
    left: 12,
    top: 7
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  FOmJhcJU: {
    height: 628,
    width: 7,
    backgroundColor: "#68A3ED",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "#5e5e5e",
    borderWidth: 2
  },
  MNAXvICC: {
    height: 623,
    width: 7,
    backgroundColor: "#68A3ED",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 349,
    top: 2,
    borderColor: "#6a6767",
    borderWidth: 2
  },
  pcZqJmxb: {
    backgroundColor: "#68A3ED",
    borderColor: "#6a6767"
  },
  RueOYfmX: {
    backgroundColor: "#68A3ED"
  },
  kyZbrGPb: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 21
  },
  zPnXAOva: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 151,
    height: 21,
    top: 200,
    left: 103
  },
  CYOnXYQR: {
    width: 356,
    height: 25,
    textAlign: "center"
  },
  AZIgawIW: {
    position: "absolute",
    top: 178,
    left: 103,
    width: 171,
    height: 20,
    color: "#b9b9b9"
  },
  LzpQyiVZ: {
    position: "absolute",
    top: 120,
    left: 103,
    color: "#b9b9b9"
  },
  qliKQRGr: {
    position: "absolute",
    top: 86,
    backgroundColor: "#ffffff",
    left: 103,
    width: 151,
    height: 21
  },
  WzPGuFHM: {
    textAlign: "left",
    width: 356,
    height: 35,
    position: "absolute",
    top: 63,
    left: 103,
    color: "#b9b9b9"
  }
});
export default WelcomeScreen;