import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Products from "../data/products.json";
import { useEffect, useState } from "react";
import CardProducts from "../components/CardProducts";

const ProductsByCategory = ({ categorySelected }) => {
  const [productsFiltered, setProductsFiltered] = useState("");
  useEffect(() => {
    setProductsFiltered(
      Products.filter((product) => product.category === categorySelected)
    );
  }, [categorySelected]);
  return (
    <>
      <Header title={categorySelected} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProducts item={item} />}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});