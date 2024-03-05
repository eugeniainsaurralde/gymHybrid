import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  changeByAmount,
} from "../features/counter/counterSlice";
import { Palete } from "../globals/Palete";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => dispatch(decrement())} />

      <Text>{count}</Text>

      <Button title="+" onPress={() => dispatch(increment())} />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(t) => setNumber(parseInt(t))}
          style={styles.input}
        />
        <Button
          title="Monto"
          onPress={() => dispatch(changeByAmount(number))}
        />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },
  input: {
    borderColor: Palete.darkGray,
    borderWidth: 2,
    width: "20%",
    marginHorizontal: 10,
  },
});
