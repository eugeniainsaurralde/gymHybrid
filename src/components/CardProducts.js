import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";
import PrimaryButton from "./wrappers/PrimaryButton";

const CardProducts = ({ item, selectedProductId }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.text,
            width > 320 ? { fontSize: 25 } : { fontSize: 20 },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.text,
            width > 320 ? { fontSize: 20 } : { fontSize: 15 },
          ]}
        >
          ${item.price}
        </Text>
        <PrimaryButton
          style={styles.button}
          onPress={() => selectedProductId(item.id)}
        >
          <Text>Ver mas</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default CardProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.primary,
    height: 155,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: "2%",
    padding: "3%",
    borderRadius: 5,
  },
  image: {
    minWidth: 100,
    width: "35%",
    height: "100%",
    maxHeight: 140,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    height: "inherit",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: "3%",
  },
  text: {
    textAlign: "center",
    color: Palete.darkWhite,
    fontSize: 20,
    fontFamily: Fonts.secodaryFont,
  },
  button: {
    marginTop: "4%",
    paddingVertical: "1%",
    paddingHorizontal: "10%",
  },
});
