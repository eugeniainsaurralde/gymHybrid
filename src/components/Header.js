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
      {navigation.canGoBack() && (
        <ShadowPrimary style={styles.goBack}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={30} color={Palete.darkGray} />
          </Pressable>
        </ShadowPrimary>
      )}
      <Text
        style={[
          styles.text,
          width >= 320 ? { fontSize: 60 } : { fontSize: 40 },
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
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  goBack: {
    flex: 1,
    position: "absolute",
    backgroundColor: Palete.lightGray,
    padding: "1%",
    marginHorizontal: "2%",
    borderRadius: 5,
  },
  text: {
    flex: 11,
    color: Palete.secondary,
    fontFamily: Fonts.mainFont,
    textAlign: "center",
  },
});
