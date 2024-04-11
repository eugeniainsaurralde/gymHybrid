import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import { fetchSession } from "../data/db";

const MainNavigator = () => {
  const user = useSelector((state) => state.auth);

  /*   useEffect(() => {
    (async () => {
      const session = await fetchSession();
      console.log(session.rows);
    })();
  }, []); */
  return (
    <NavigationContainer>
      {user.idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
