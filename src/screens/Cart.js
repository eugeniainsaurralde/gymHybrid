import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { usePostOrderMutation } from "../app/services/orders";
import { deleteCart } from "../features/Cart/cartSlice";

import CardItemCart from "../components/CardItemCart";
import PrimaryButton from "../components/wrappers/PrimaryButton";
import Fonts from "../data/globals/Fonts";
import { Palete } from "../data/globals/Palete";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();

  const handlerAddOrder = async () => {
    const createDate = new Date().toLocaleString();
    const order = {
      createDate,
      ...cart,
    };
    await triggerAddOrder({ localId, order });
    dispatch(deleteCart());
    navigation.navigate("OrderStack");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItemCart item={item} />}
      />
      <View style={styles.InfoBottom}>
        <Text style={styles.text}>Total: </Text>
        <Text style={styles.text}>$ {cart.total}</Text>
      </View>
      <PrimaryButton
        stylePressable={styles.pressable}
        styleText={styles.textPressable}
        onPress={() => {
          handlerAddOrder();
        }}
      >
        {"Finalizar compra"}
      </PrimaryButton>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: Palete.darkWhite,
  },
  InfoBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: Fonts.secodaryFont,
    fontSize: 30,
  },
  pressable: {
    marginVertical: "4%",
    height: "8%",
  },
  textPressable: {
    fontSize: 30,
  },
});
