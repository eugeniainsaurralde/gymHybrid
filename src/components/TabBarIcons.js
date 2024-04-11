import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Palete } from "../data/globals/Palete";

const TabBarIcons = ({ nameIcon, focused }) => {
  return (
    <View style={[styles.container, focused && styles.containerFocused]}>
      <AntDesign
        name={nameIcon}
        size={35}
        color={focused ? Palete.primary : Palete.darkWhite}
      />
    </View>
  );
};

export default TabBarIcons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFocused: {
    backgroundColor: Palete.darkWhite,
    borderColor: Palete.darkWhite,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
});
