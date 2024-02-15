import { StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = ({ selectedCategoryState }) => {
  return (
    <View>
      <Header />
      <Categories selectedCategoryState={selectedCategoryState} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
