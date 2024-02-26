import { StyleSheet, useWindowDimensions } from "react-native";
import PrimaryButton from "./wrappers/PrimaryButton";

const CardCategory = ({ item, selectedCategoryState }) => {
  const { width } = useWindowDimensions();
  return (
    <PrimaryButton
      onPress={() => selectedCategoryState(item)}
      styleText={[width >= 320 ? { fontSize: 30 } : { fontSize: 20 }]}
      stylePressable={styles.pressable}
    >
      {item}
    </PrimaryButton>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: "10%",
    marginVertical: "2%",
    padding: "3%",
  },
});
