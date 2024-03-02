import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Header from "../components/Header";
import { Palete } from "../globals/Palete";

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={() => {
        return {
          headerTitle: () => {
            return <Header title={"Cart"} />;
          },
          headerStyle: {
            backgroundColor: Palete.darkWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
