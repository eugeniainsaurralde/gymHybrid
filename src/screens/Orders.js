import { FlatList, StyleSheet } from "react-native";
import orders from "../data/orders.json";
import CardOrder from "../components/CardOrder";
import { Palete } from "../globals/Palete";

const Orders = () => {
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardOrder item={item} />}
      style={styles.container}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: Palete.darkWhite,
  },
});
