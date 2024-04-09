import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../app/services/orders";
import CardOrder from "../components/CardOrder";
import { Palete } from "../globals/Palete";

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders } = useGetOrdersQuery(localId);

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
