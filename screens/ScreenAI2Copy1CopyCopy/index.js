import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View><TextInput style={styles.iTixcXPe} maxLength={384} multiline={true}></TextInput><View style={styles.PfaTYEyu}><Text style={styles.uabCJpyi}>{"Add Text"}</Text></View></View>
      
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><Text style={styles.Usavnfxt}>{"Atriu.net Copyright 2023"}</Text><View><TouchableOpacity></TouchableOpacity></View><View style={styles.MgxDGQNS}><TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI2Copy1Copy");
      }}><Text style={styles.didQjPNm}>{"Relay Message"}</Text></TouchableOpacity></View><View><TouchableOpacity></TouchableOpacity></View></SafeAreaView>;
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
    width: 356,
    height: 26,
    textAlign: "center"
  },
  MgxDGQNS: {
    width: 321,
    height: 47,
    borderRadius: 4,
    backgroundColor: "#6398de",
    position: "absolute",
    top: 338,
    left: 18
  },
  didQjPNm: {
    width: 100,
    height: 19,
    position: "absolute",
    top: 13,
    left: 110,
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
  PfaTYEyu: {
    height: 50,
    width: 140,
    backgroundColor: "#272727",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    top: 397,
    left: 194,
    borderWidth: 4,
    borderColor: "#191919"
  },
  uabCJpyi: {
    width: 83,
    height: 22,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 13,
    left: 25,
    color: "#ffffff"
  }
});
export default WelcomeScreen;