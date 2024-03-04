import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Palete } from "../globals/Palete";
import Fonts from "../globals/Fonts";

const CardOrder = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Creado el {new Date(item.createAt).toLocaleString()}
        </Text>
        <Text style={styles.text}>Total de la orden: $ {item.total}</Text>
      </View>
      <View>
        <AntDesign name="search1" color={Palete.darkWhite} size={35} />
      </View>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palete.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
