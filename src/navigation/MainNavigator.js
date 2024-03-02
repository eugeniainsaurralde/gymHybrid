import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Palete } from "../globals/Palete";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import Orders from "../screens/Orders";
import TabBarIcons from "../components/TabBarIcons";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ShopStack"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabNav,
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcons nameIcon={"home"} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcons nameIcon={"shoppingcart"} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcons nameIcon={"tagso"} focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  tabNav: {
    backgroundColor: Palete.secondary,
    borderColor: Palete.darkWhite,
    height: "8%",
  },
});
