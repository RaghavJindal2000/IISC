import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";

const InputField = props => {
  const [value, setValue] = React.useState("");

  return (
    <Input
      value={value}
      placeholder={props.placeholder}
      style={styles.input}
      textStyle={styles.inputText}
      labelStyle={styles.inputLabel}
      captionTextStyle={styles.inputCaption}
      onChangeText={setValue}
      type={props.type}
      secureTextEntry={props.secure}
    />
  );
};

const styles = StyleSheet.create({
  input: { borderRadius: 20, marginHorizontal: 20, marginTop: 10 },
  inputText: { color: "#3366FF" },
  inputLabel: { color: "#3366FF", fontSize: 15 },
  inputCaption: { color: "#3366FF" }
});

export default InputField;
