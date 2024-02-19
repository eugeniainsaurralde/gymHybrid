import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";
import PrimaryButton from "./wrappers/PrimaryButton";

const CardProducts = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>${item.price}</Text>
        <PrimaryButton>
          <Text>Agregar</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

export default CardProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.primary,
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: "2%",
    padding: "3%",
    borderRadius: 5,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Palete.darkWhite,
    fontSize: 20,
    fontFamily: Fonts.secodaryFont,
  },
});
