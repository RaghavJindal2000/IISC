import React from "react";
import { StyleSheet, Alert } from "react-native";
import { Input, Layout, Text, Button } from "@ui-kitten/components";

import InputField from "../components/Input";

const MasterLogin = () => {
  const [value, setValue] = React.useState("");

  const buttonPressed = () => {};

  return (
    <Layout style={styles.screen}>
      <Text category="h1">Welcome to Medicina</Text>
      <InputField type="text" placeholder="Your Email Id" />
      <InputField type="text" placeholder="Your Password" secure={true} />
      <Button
        style={styles.button}
        appearance="outline"
        onPress={() => Alert.alert("Login Button Pressed")}
        status="info"
      >
        Login
      </Button>
      <Text style={styles.info}>Don't have any account Please SignUp</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 8
  },
  info: {
    position: "absolute",
    bottom: 2
  }
});

export default MasterLogin;
