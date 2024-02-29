import { StyleSheet, useWindowDimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsByCategory from "../screens/ProductsByCategory";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import Header from "../components/Header";
import { Palete } from "../globals/Palete";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => {
        return {
          headerTitle: () => {
            return (
              <Header
                navigation={navigation}
                title={
                  route.name === "Home"
                    ? "Categorias"
                    : route.name === "ProductsByCategory"
                    ? route.params.categorySelected
                    : route.params.productTitle
                }
              />
            );
          },
          headerStyle: {
            backgroundColor: Palete.darkWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
