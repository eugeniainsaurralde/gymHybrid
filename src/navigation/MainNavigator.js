import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsByCategory from "../screens/ProductsByCategory";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => {
          return {
            header: () => {
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
          };
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProductsByCategory"
          component={ProductsByCategory}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
