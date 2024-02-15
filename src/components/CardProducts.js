import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";

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
        <Text style={styles.text}>{item.price}</Text>
        <Pressable style={styles.primaryBotton}>
          <Text style={styles.text}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardProducts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Palete.primary,
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
    width: "70%",
    marginHorizontal: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Palete.darkWhite,
    fontSize: 18,
    padding: "2%",
  },
  primaryBotton: {
    backgroundColor: Palete.secondary,
    borderRadius: 8,
    paddingVertical: "3%",
    paddingHorizontal: "10%",
  },
});
