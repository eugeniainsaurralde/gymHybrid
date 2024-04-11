import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { useGetImageQuery } from "../app/services/profileData";
import { clearUser } from "../features/Auth/authSlice";
import { deleteSession } from "../data/db/sqlite";

import { Palete } from "../data/globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const tokenId = useSelector((state) => state.auth.idToken);

  const { data } = useGetImageQuery(localId);

  const onLogOut = () => {
    dispatch(clearUser());
    deleteSession();
  };

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
        <AntDesign name="camerao" size={30} />
        {"  Agregar/modificar foto"}
      </SecondaryButton>
      {tokenId && (
        <SecondaryButton
          stylePressable={styles.pressable}
          styleText={styles.text}
          onPress={onLogOut}
        >
          <AntDesign name="deleteuser" size={30} />
          {"  Cerrar sesion"}
        </SecondaryButton>
      )}
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
