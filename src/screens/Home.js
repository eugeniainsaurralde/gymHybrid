import { StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import { Palete } from "../globals/Palete";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
  },
});
