import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";

const Header = ({ title = "Home" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: "3%",
  },
  text: {
    color: Palete.secondary,
    fontSize: 60,
    fontFamily: Fonts.mainFont,
  },
});
