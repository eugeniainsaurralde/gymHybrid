import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import ProductsByCategory from "./src/screens/ProductsByCategory";
import Home from "./src/screens/Home";
import ProductDetail from "./src/screens/ProductDetail";
import { Palete } from "./src/globals/Palete";
import { FontCollection } from "./src/globals/Fonts";

const App = () => {
  const [fontLoaded] = useFonts(FontCollection);
  const [categorySelected, setCategorySelected] = useState("");
  const [productId, setProductId] = useState(0);

  if (!fontLoaded) {
    return null;
  }
  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };
  const selectedProductId = (id) => {
    setProductId(id);
  };

  return (
    <>
      <StatusBar backgroundColor={Palete.darkWhite} barStyle={"dark-content"} />
      <SafeAreaView style={styles.container}>
        {categorySelected ? (
          productId ? (
            <ProductDetail productId={productId} />
          ) : (
            <ProductsByCategory
              categorySelected={categorySelected}
              selectedProductId={selectedProductId}
            />
          )
        ) : (
          <Home selectedCategoryState={selectedCategoryState} />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
  },
});
