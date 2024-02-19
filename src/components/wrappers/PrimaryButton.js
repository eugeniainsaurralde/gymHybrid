import { StyleSheet, Text, View, Pressable } from "react-native";
import { Palete } from "../../globals/Palete";
import Fonts from "../../globals/Fonts";

const PrimaryButton = ({ style, children }) => {
  return (
    <Pressable style={[styles.primaryButton, style]}>
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Palete.secondary,
    borderRadius: 8,
    marginTop: "5%",
    paddingVertical: "3%",
    paddingHorizontal: "10%",
  },
  text: {
    color: Palete.darkWhite,
    fontFamily: Fonts.mainFont,
    fontSize: 25,
  },
});
