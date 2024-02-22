import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";

const CardCategory = ({ item, selectedCategoryState }) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable onPress={() => selectedCategoryState(item)}>
      <ShadowPrimary style={styles.container}>
        <Text
          style={[
            styles.text,
            width >= 320 ? { fontSize: 30 } : { fontSize: 20 },
          ]}
        >
          {item}
        </Text>
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
    fontSize: 30,
    fontFamily: Fonts.secodaryFont,
    color: Palete.darkWhite,
  },
});
