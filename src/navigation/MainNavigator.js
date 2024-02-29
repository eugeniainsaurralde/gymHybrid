import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <ShopStack />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
