import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><TextInput style={styles.iTixcXPe}></TextInput></View>
      
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><Text style={styles.Usavnfxt}>{"Atriu.net Copyright 2023"}</Text><View><TouchableOpacity></TouchableOpacity></View><View style={styles.MgxDGQNS}><TouchableOpacity><Text style={styles.didQjPNm}>{"Relay"}</Text></TouchableOpacity></View><TextInput style={styles.MaczZpgY}></TextInput></SafeAreaView>;
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
    width: 50,
    height: 52,
    borderRadius: 75,
    position: "absolute",
    left: 14,
    top: 9
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
  Usavnfxt: {
    width: 340,
    height: 26,
    textAlign: "center"
  },
  MgxDGQNS: {
    width: 79,
    height: 47,
    borderRadius: 4,
    backgroundColor: "#6398de",
    position: "absolute",
    top: 16,
    left: 260
  },
  didQjPNm: {
    width: 41,
    height: 19,
    position: "absolute",
    top: 13,
    left: 23,
    color: "#ffffff"
  },
  iTixcXPe: {
    position: "absolute",
    top: 78,
    left: 16,
    width: 324,
    height: 238,
    backgroundColor: "#2a2a2a",
    color: "#e3e3e3"
  },
  MaczZpgY: {
    position: "absolute",
    top: 326,
    left: 15,
    width: 328,
    height: 278,
    backgroundColor: "#222222"
  }
});
export default WelcomeScreen;