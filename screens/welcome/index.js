import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.wdXQmeLe}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./D6xXnNxNgpPEoaqxdkk3--8--dfh9i.jpg")} />
          <Text style={styles.text}>
            {"An Accoutered Social Media\n          "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Go to Login</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>{"Atriu.net"}</Text>
      <View style={styles.ZWgcAFiX}></View></ScrollView>
    <View style={styles.XPoLVdxQ}></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#68a3ed",
    fontWeight: "700"
  },
  loginLink: {
    textAlign: "center",
    fontSize: 18,
    color: "#68A3ED",
    fontWeight: "700",
    marginBottom: 20
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#68A3ED",
    fontWeight: "700",
    marginBottom: 20
  },
  ZWgcAFiX: {
    height: 13,
    width: 342,
    backgroundColor: "#68A3ED",
    borderRadius: 0,
    color: "#777777"
  },
  XPoLVdxQ: {
    width: 5,
    height: 636,
    backgroundColor: "#549af3"
  },
  wdXQmeLe: {
    width: 356,
    height: 603
  }
});
export default WelcomeScreen;