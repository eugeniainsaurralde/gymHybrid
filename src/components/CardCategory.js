import { Pressable, StyleSheet, Text, View } from "react-native";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import { Palete } from "../globals/Palete";
import fonts from "../globals/Fonts";

const CardCategory = ({ item, selectedCategoryState }) => {
  return (
    <Pressable onPress={() => selectedCategoryState(item)}>
      <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.primary,
    alignItems: "center",
    marginHorizontal: "8%",
    marginVertical: "2%",
    padding: "3%",
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: Palete.darkWhite,
    fontFamily: fonts.secodaryFont,
  },
});
