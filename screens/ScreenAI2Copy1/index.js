import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><View style={styles.mraGdPFe}></View><View style={styles.AgLTajOe}><Text style={styles.fvGBSzKv}>{"Affinity"}</Text></View><Text style={styles.dsHFWVNo}>{"Add User to Timeline"}</Text></View>
      
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><Text style={styles.Usavnfxt}>{"Atriu.net Copyright 2023"}</Text><Pressable onPress={() => {}}><Text style={styles.XpJAakTY}>{"Salient"}</Text></Pressable><View></View><Text style={styles.nOzfFGAN}>{"See Sometimes"}</Text></SafeAreaView>;
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
  mraGdPFe: {
    height: 52,
    width: 136,
    backgroundColor: "#518ccb",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    top: 126,
    left: 28
  },
  XpJAakTY: {
    textAlign: "center",
    position: "absolute",
    top: -494,
    left: 45,
    width: 98,
    height: 34
  },
  AgLTajOe: {
    height: 53,
    width: 132,
    backgroundColor: "#3d89c5",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    top: 125,
    left: 202
  },
  fvGBSzKv: {
    width: 81,
    height: 23,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 18,
    left: 24
  },
  dsHFWVNo: {
    width: 140,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    textAlign: "left",
    position: "absolute",
    top: 187,
    left: 31
  },
  nOzfFGAN: {
    position: "absolute",
    top: 184,
    left: 204,
    color: "#ffffff"
  }
});
export default WelcomeScreen;