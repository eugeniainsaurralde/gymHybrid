import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Palete } from "../globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";

const Counter = ({ onHandleQuantity }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    onHandleQuantity(count);
  }, [count]);

  return (
    <View style={styles.container}>
      <SecondaryButton
        onPress={() => decrement()}
        stylePressable={styles.pressable}
      >
        {"-"}
      </SecondaryButton>

      <Text style={styles.text}>{count}</Text>

      <SecondaryButton
        onPress={() => increment()}
        stylePressable={styles.pressable}
      >
        {"+"}
      </SecondaryButton>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },
  text: {
    borderColor: Palete.darkGray,
    borderRadius: 6,
    borderWidth: 1,
    width: "30%",
    marginHorizontal: "5%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  pressable: {
    width: "12%",
  },
});
