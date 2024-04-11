import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Palete } from "../data/globals/Palete";
import Fonts from "../data/globals/Fonts";

const Header = ({ title, color = Palete.secondary }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 55 } : { fontSize: 40 },
          title.length > 20 ? { fontSize: 35 } : { fontSize: 55 },
          { color: color },
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
    backgroundColor: Palete.darkWhite,
    padding: "3%",

    flexWrap: "wrap",
  },
  text: {
    fontFamily: Fonts.mainFont,
  },
});
