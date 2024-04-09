import { StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Palete } from "../globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";
import { useSelector } from "react-redux";
import { useGetImageQuery } from "../app/services/profileData";

const Profile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data } = useGetImageQuery(localId);

  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <SecondaryButton
        stylePressable={styles.pressable}
        styleText={styles.text}
        onPress={() => navigation.navigate("ImageSelector")}
      >
        {"+ Agregar/modificar foto"}
      </SecondaryButton>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
    alignItems: "center",
  },
  image: {
    height: "50%",
    width: "80%",
    borderRadius: 200,
  },
  pressable: {
    padding: "3%",
    margin: "3%",
  },
  text: {
    fontSize: 20,
  },
});
