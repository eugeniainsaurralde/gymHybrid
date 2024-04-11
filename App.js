import { StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { Palete } from "./src/data/globals/Palete";
import { FontCollection } from "./src/data/globals/Fonts";

import MainNavigator from "./src/navigation/MainNavigator";

import { store } from "./src/app/Store";
import { Provider } from "react-redux";
import { init } from "./src/data/db/sqlite";

init();

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
