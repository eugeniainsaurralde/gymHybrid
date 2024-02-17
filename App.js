import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import Home from "./src/screens/Home";
import { Palete } from "./src/globals/Palete";
import { fontCollection } from "./src/globals/Fonts";

const App = () => {
  const [fontLoaded] = useFonts(fontCollection);
  const [categorySelected, setCategorySelected] = useState("");

  if (!fontLoaded) {
    return null;
  }
  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ProductsByCategory categorySelected={categorySelected} />
      ) : (
        <Home selectedCategoryState={selectedCategoryState} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: Palete.darkWhite,
  },
});
