import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";

const Header = ({ title = "Home" }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 60 } : { fontSize: 40 },
        ]}
      >
        {title}
      </Text>
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
    fontFamily: Fonts.mainFont,
    textAlign: "center",
  },
});
