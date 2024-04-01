import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/user.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <SecondaryButton
        stylePressable={styles.pressable}
        styleText={styles.text}
        onPress={() => navigation.navigate("ImageSelector")}
      >
        {"+ Agregar foto"}
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
