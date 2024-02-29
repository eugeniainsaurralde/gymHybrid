import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";
import { AntDesign } from "@expo/vector-icons";
import ShadowPrimary from "./wrappers/ShadowPrimary";

const Header = ({ title, navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {/* {navigation.canGoBack() && (
        <ShadowPrimary style={styles.goBack}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={30} color={Palete.darkGray} />
          </Pressable>
        </ShadowPrimary>
      )} */}
      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 55 } : { fontSize: 40 },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.darkWhite,
    padding: "3%",
    flexWrap: "wrap",
  },
  text: {
    color: Palete.secondary,
    fontFamily: Fonts.mainFont,
  },
});
