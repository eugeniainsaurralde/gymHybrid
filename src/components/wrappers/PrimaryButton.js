import { StyleSheet, Text, Pressable, useWindowDimensions } from "react-native";
import { Palete } from "../../globals/Palete";
import Fonts from "../../globals/Fonts";

const PrimaryButton = ({ style, children, onPress }) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable style={[styles.primaryButton, style]} onPress={onPress}>
      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 25 } : { fontSize: 18 },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Palete.secondary,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: Palete.darkWhite,
    fontFamily: Fonts.mainFont,
    fontSize: 25,
    textAlign: "center",
  },
});
