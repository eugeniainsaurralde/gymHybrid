import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { Palete } from "./src/globals/Palete";
import { FontCollection } from "./src/globals/Fonts";

import MainNavigator from "./src/navigation/MainNavigator";

import { store } from "./src/app/Store";
import { Provider } from "react-redux";

const App = () => {
  const [fontLoaded] = useFonts(FontCollection);
  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={Palete.darkWhite} barStyle={"dark-content"} />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
