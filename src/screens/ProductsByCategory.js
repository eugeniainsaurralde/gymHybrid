import { StyleSheet, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import Products from "../data/products.json";
import CardProducts from "../components/CardProducts";
import Search from "../components/Search";
import { Palete } from "../globals/Palete";

const ProductsByCategory = ({ navigation, route }) => {
  const { categorySelected } = route.params;

  const [productsFiltered, setProductsFiltered] = useState("");
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    if (keyWord) {
      setProductsFiltered(
        productsFiltered.filter((product) => {
          const titleLower = product.title.toLowerCase();
          const keyWordLower = keyWord.toLowerCase();
          return titleLower.includes(keyWordLower);
        })
      );
    } else {
      setProductsFiltered(
        Products.filter((product) => product.category === categorySelected)
      );
    }
  }, [categorySelected, keyWord]);

  const onHandlerKeyWord = (k) => {
    setKeyWord(k);
  };

  return (
    <View style={styles.container}>
      <Search onHandlerKeyWord={onHandlerKeyWord} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardProducts item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
  },
});
