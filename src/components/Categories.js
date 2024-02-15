import { StyleSheet, FlatList } from "react-native";
import categories from "../data/categories.json";
import CardCategory from "./CardCategory";

const Categories = ({ selectedCategoryState }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CardCategory
          selectedCategoryState={selectedCategoryState}
          item={item}
        />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
