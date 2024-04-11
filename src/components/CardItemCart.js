import { Pressable, StyleSheet, Text, View } from "react-native";

import { useDispatch } from "react-redux";
import { deleteCartItem } from "../features/Cart/cartSlice";

import { AntDesign } from "@expo/vector-icons";
import { Palete } from "../data/globals/Palete";
import Fonts from "../data/globals/Fonts";

const CardItemCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.brand}</Text>
        <Text style={styles.text}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text}>$ {item.price}</Text>
      </View>
      <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
        <AntDesign name="delete" color={Palete.darkWhite} size={30} />
      </Pressable>
    </View>
  );
};

export default CardItemCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Palete.secondary,
    marginVertical: "3%",
    padding: "4%",
    borderRadius: 10,
  },
  text: {
    fontFamily: Fonts.secodaryFont,
    fontSize: 20,
    color: Palete.darkWhite,
  },
});
