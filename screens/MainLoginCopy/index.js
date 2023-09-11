import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  const {
    entities: Passwords
  } = useSelector(state => state.Passwords);
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container} onPress={() => {
    navigation.navigate("ScreenAI2CopyCopy");
  }}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
        
      <View style={styles.FOmJhcJU}></View><View style={styles.MNAXvICC}></View></View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
        navigation.navigate("ScreenAI2Copy1");
      }}>
          <Text style={styles.loginText}>{"Continue to Atriu"}</Text>
        </TouchableOpacity>
      </View>
    <View></View><View></View><View></View><View></View><View style={styles.pcZqJmxb}></View><View></View><View style={styles.RueOYfmX}></View><TextInput style={styles.zPnXAOva} data={Passwords}></TextInput><Text style={styles.CYOnXYQR}>{"Atriu.net Copyright 2023"}</Text><Text style={styles.AZIgawIW}>{"Token\n"}</Text></SafeAreaView>;
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
  zPnXAOva: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 151,
    height: 21,
    top: 386,
    left: 102
  },
  CYOnXYQR: {
    width: 356,
    height: 25,
    textAlign: "center"
  },
  AZIgawIW: {
    position: "absolute",
    top: 355,
    left: 156,
    width: 171,
    height: 20,
    color: "#b9b9b9"
  }
});
export default WelcomeScreen;