import { StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Palete } from "../data/globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";
import * as ImagePicker from "expo-image-picker";
import {
  useGetImageQuery,
  usePutImageMutation,
} from "../app/services/profileData";
import { useSelector } from "react-redux";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [trigerImage] = usePutImageMutation();
  const localId = useSelector((state) => state.auth.localId);
  const { data, isSuccess } = useGetImageQuery(localId);

  useEffect(() => {
    if (isSuccess && data) setImage(data.image);
  }, [isSuccess, data]);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.3,
        base64: true,
      });
      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };
  const confirmImage = () => {
    trigerImage({ image, localId });
    navigation.goBack;
  };
  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <SecondaryButton
        stylePressable={styles.pressable}
        styleText={styles.text}
        onPress={() => pickImage()}
      >
        {"Tomar foto"}
      </SecondaryButton>
      <SecondaryButton
        stylePressable={styles.pressable}
        styleText={styles.text}
        onPress={() => confirmImage()}
      >
        {"Confirmar foto"}
      </SecondaryButton>
    </View>
  );
};

export default ImageSelector;

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
    padding: "4%",
    margin: "3%",
  },
  text: {
    fontSize: 20,
  },
});
