import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import CardItemCart from "../components/CardItemCart";
import PrimaryButton from "../components/wrappers/PrimaryButton";
import Fonts from "../globals/Fonts";
import { Palete } from "../globals/Palete";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
