import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><Text style={styles.nrGriiVq}>{"ID"}</Text><Text style={styles.owZIhOdk}>{"Username"}</Text></View>
      
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><Text style={styles.Usavnfxt}>{"Atriu.net Copyright 2023"}</Text><View><TouchableOpacity></TouchableOpacity></View><View style={styles.MgxDGQNS}><TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI2Copy1CopyCopy");
      }}></TouchableOpacity><Pressable onPress={() => {
        navigation.navigate("ScreenAI2Copy1CopyCopy");
      }}><Text style={styles.kTyuUyja}>{"Relay"}</Text></Pressable></View><TextInput style={styles.MaczZpgY}></TextInput><Image style={styles.PYAZRWgz}></Image><Image></Image></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e"
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 356,
    height: 610
  },
  logo: {
    width: 63,
    height: 61,
    borderRadius: 75,
    position: "absolute",
    left: 12,
    top: 8
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
    width: 356,
    height: 25,
    textAlign: "center"
  },
  MgxDGQNS: {
    width: 79,
    height: 47,
    borderRadius: 4,
    backgroundColor: "#6398de",
    position: "absolute",
    top: 14,
    left: 259
  },
  MaczZpgY: {
    position: "absolute",
    top: 70,
    left: 17,
    width: 328,
    height: 540,
    backgroundColor: "#222222"
  },
  nrGriiVq: {
    width: 100,
    height: 21,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 34,
    left: 102
  },
  owZIhOdk: {
    width: 100,
    height: 20,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 10,
    textAlign: "left",
    left: 103
  },
  kTyuUyja: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    position: "absolute",
    top: 15,
    left: 24
  },
  PYAZRWgz: {
    width: 356,
    height: 0
  }
});
export default WelcomeScreen;