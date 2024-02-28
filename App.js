import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Palete } from "./src/globals/Palete";
import { FontCollection } from "./src/globals/Fonts";

import MainNavigator from "./src/navigation/MainNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontLoaded] = useFonts(FontCollection);
  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={Palete.darkWhite} barStyle={"dark-content"} />
      <MainNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
