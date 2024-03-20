import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { useState } from "react";
import AuthStack from "./AuthStack";

const MainNavigator = () => {
  const [idToken, setIdToken] = useState("");
  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
