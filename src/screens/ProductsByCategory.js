import { StyleSheet, FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import { useGetProductsByCategoryQuery } from "../app/services/shop";

import CardProducts from "../components/CardProducts";
import Search from "../components/Search";
import { Palete } from "../data/globals/Palete";

const ProductsByCategory = ({ navigation, route }) => {
  const { categorySelected } = route.params;
  const { data: products } = useGetProductsByCategoryQuery(categorySelected);
  const [productsFiltered, setProductsFiltered] = useState([]);
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
      setProductsFiltered(products);
    }
  }, [categorySelected, keyWord, products]);

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
