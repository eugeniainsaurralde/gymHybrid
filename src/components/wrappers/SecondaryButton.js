import { StyleSheet, Text, Pressable } from "react-native";
import { Palete } from "../../globals/Palete";
import Fonts from "../../globals/Fonts";

const SecondaryButton = ({ stylePressable, styleText, children, onPress }) => {
  return (
    <Pressable
      style={[styles.secondaryButton, stylePressable]}
      onPress={onPress}
    >
      <Text style={[styles.text, styleText]}>{children}</Text>
    </Pressable>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: Palete.secondary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Palete.darkWhite,
    fontFamily: Fonts.mainFont,
    textAlign: "center",
  },
});
