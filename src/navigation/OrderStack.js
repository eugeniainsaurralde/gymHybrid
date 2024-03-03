import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/Orders";
import Header from "../components/Header";
import { Palete } from "../globals/Palete";

const Stack = createNativeStackNavigator();
const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ordenes"
      screenOptions={() => {
        return {
          headerTitle: () => {
            return <Header title={"Ordenes"} />;
          },
          headerStyle: {
            backgroundColor: Palete.darkWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
