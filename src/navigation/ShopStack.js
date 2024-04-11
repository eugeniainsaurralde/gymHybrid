import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsByCategory from "../screens/ProductsByCategory";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import Header from "../components/Header";
import { Palete } from "../data/globals/Palete";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          headerTitle: () => {
            return (
              <Header
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
