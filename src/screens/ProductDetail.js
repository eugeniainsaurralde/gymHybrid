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
import ShadowPrimary from "../components/wrappers/ShadowPrimary";
import PrimaryButton from "../components/wrappers/PrimaryButton";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const productFinded = Products.find((product) => product.id === productId);
    setProductDetail(productFinded);
  }, [productId]);

  const { width } = useWindowDimensions();

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
      <View>
        <Text
          style={[
            styles.text,
            width >= 320 ? { fontSize: 25 } : { fontSize: 18 },
          ]}
        >
          {productDetail.description}
        </Text>
        <Text
          style={[
            styles.text,
            styles.price,
            width >= 320 ? { fontSize: 21 } : { fontSize: 16 },
          ]}
        >
          ${productDetail.price}
        </Text>
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
    backgroundColor: Palete.darkWhite,
    flex: 1,
    paddingHorizontal: "4%",
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
