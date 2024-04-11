import { StyleSheet, TextInput, View, Text } from "react-native";
import React from "react";
import { Palete } from "../data/globals/Palete";

const Input = ({ placeholder, onHandle, value, isSecure = false, error }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={(t) => onHandle(t)}
        value={value}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View style={styles.containerError}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: Palete.darkGray,
    borderWidth: 2,
    borderRadius: 8,
    padding: "3%",
  },
  containerError: {
    marginBottom: "2%",
  },
  error: {
    color: Palete.secondary,
  },
});
