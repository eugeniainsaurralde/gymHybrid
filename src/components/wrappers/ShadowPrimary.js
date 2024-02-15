import { StyleSheet, Text, View } from "react-native";

const ShadowPrimary = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{children}</Text>
    </View>
  );
};

export default ShadowPrimary;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
