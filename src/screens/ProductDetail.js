import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/cartSlice";

import Products from "../data/products.json";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";
import ShadowPrimary from "../components/wrappers/ShadowPrimary";
import PrimaryButton from "../components/wrappers/PrimaryButton";
import Counter from "../components/Counter";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const productFinded = Products.find((product) => product.id === productId);
    setProductDetail(productFinded);
  }, [productId]);

  const { width } = useWindowDimensions();

  const [quantity, setQuantity] = useState(0);
  const onHandleQuantity = (quantity) => {
    setQuantity(quantity);
  };
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ShadowPrimary style={styles.imageContainer}>
        <Image
          source={{
            uri: productDetail.thumbnail,
          }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </ShadowPrimary>

      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 25 } : { fontSize: 18 },
        ]}
      >
        {productDetail.description}
      </Text>

      <View style={styles.numberInfoContainer}>
        <Counter onHandleQuantity={onHandleQuantity} />
        <Text
          style={[
            styles.text,
            width >= 320 ? { fontSize: 25 } : { fontSize: 18 },
          ]}
        >
          ${productDetail.price}
        </Text>
      </View>

      <PrimaryButton
        stylePressable={styles.pressable}
        styleText={[width >= 320 ? { fontSize: 25 } : { fontSize: 18 }]}
        onPress={() => dispatch(addCartItem({ ...productDetail, quantity }))}
      >
        {"Agregar al carrito"}
      </PrimaryButton>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.darkWhite,
    flex: 1,
    paddingHorizontal: "4%",
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
    fontFamily: Fonts.secodaryFont,
  },
  numberInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  pressable: {
    width: "50%",
    padding: "3%",
  },
});
