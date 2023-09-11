import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const {
    entities: AuthTokens
  } = useSelector(state => state.AuthTokens);
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><TextInput style={styles.mUjrqZuk} data={AuthTokens}></TextInput><View style={styles.mraGdPFe}></View></View>
      
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><Text style={styles.Usavnfxt}>{"Atriu.net Copyright 2023"}</Text><Pressable onPress={() => {
      navigation.navigate("ScreenAI2Copy1Copy");
    }}><Text style={styles.XpJAakTY}>{"Continue to Atriu"}</Text></Pressable><Text style={styles.UQRbaCdT}>{"Token"}</Text></SafeAreaView>;
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
    left: 9,
    top: 1
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
    height: 26,
    textAlign: "center"
  },
  mUjrqZuk: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  mraGdPFe: {
    height: 36,
    width: 156,
    backgroundColor: "#518ccb",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    top: 327,
    left: 101
  },
  XpJAakTY: {
    textAlign: "center",
    position: "absolute",
    top: -301,
    left: 126
  },
  UQRbaCdT: {
    textAlign: "center",
    position: "absolute",
    top: 261,
    left: 157,
    color: "#e3e3e3"
  }
});
export default WelcomeScreen;