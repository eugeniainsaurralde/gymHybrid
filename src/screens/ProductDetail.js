import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Products from "../data/products.json";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";
import Header from "../components/Header";
import ShadowPrimary from "../components/wrappers/ShadowPrimary";
import PrimaryButton from "../components/wrappers/PrimaryButton";

const ProductDetail = ({ productId }) => {
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const productFinded = Products.find((product) => product.id === productId);
    setProductDetail(productFinded);
  }, [productId]);
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Header title={productDetail.title} />
      <ShadowPrimary style={styles.imageContainer}>
        <Image
          source={{
            uri: productDetail.thumbnail,
          }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </ShadowPrimary>
      <View>
        <Text style={styles.text}>{productDetail.description}</Text>
        <Text style={[styles.text, styles.price]}>${productDetail.price}</Text>
      </View>
      <PrimaryButton
        stylePressable={styles.pressable}
        styleText={[width >= 320 ? { fontSize: 25 } : { fontSize: 18 }]}
      >
        {"Agregar al carrito"}
      </PrimaryButton>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "4%",
    paddingBottom: "2%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    height: "40%",
    width: "100%",
    padding: "5%",
    borderRadius: 40,
    backgroundColor: Palete.lightGray,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 35,
  },
  text: {
    fontSize: 25,
    fontFamily: Fonts.secodaryFont,
  },
  price: {
    textAlign: "right",
  },
  pressable: {
    width: "50%",
    padding: "3%",
  },
});
