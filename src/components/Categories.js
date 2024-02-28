import { StyleSheet, FlatList } from "react-native";
import categories from "../data/categories.json";
import CardCategory from "./CardCategory";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CardCategory item={item} navigation={navigation} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
