import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Products from "../data/products.json";

const ProductDetail = ({ productId }) => {
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const productFinded = Products.find((product) => product.id === productId);
    setProductDetail(productFinded);
  }, [productId]);
  return (
    <View>
      <Text>{productDetail.title}</Text>
      <Text>{productDetail.id}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
