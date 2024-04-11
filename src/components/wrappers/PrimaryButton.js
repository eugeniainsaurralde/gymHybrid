import { StyleSheet, Text, Pressable } from "react-native";
import { Palete } from "../../data/globals/Palete";
import Fonts from "../../data/globals/Fonts";

const PrimaryButton = ({ stylePressable, styleText, children, onPress }) => {
  return (
    <Pressable style={[styles.primaryButton, stylePressable]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{children}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Palete.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: Fonts.secodaryFont,
    color: Palete.darkWhite,
    textAlign: "center",
  },
});
