import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  changeByAmount,
} from "../features/counter/counterSlice";
import { Palete } from "../globals/Palete";
import SecondaryButton from "../components/wrappers/SecondaryButton";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNumber] = useState(0);

  const onHandlerInput = (t) => {
    setNumber(parseInt(t));
    dispatch(changeByAmount(number));
  };
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <SecondaryButton
          onPress={() => dispatch(decrement())}
          stylePressable={styles.pressable}
        >
          {"-"}
        </SecondaryButton>
        <TextInput
          /* onChangeText={(t) => setNumber(parseInt(t))} */
          /* onChangeText={(t) => onHandlerInput(t)} */
          style={styles.input}
          value={count.toString()}
        />

        <SecondaryButton
          onPress={() => dispatch(increment())}
          stylePressable={styles.pressable}
        >
          {"+"}
        </SecondaryButton>
      </View>
      {/* <SecondaryButton
         onPress={() => dispatch(changeByAmount(number))}
        onPress={() => onHandlerQuantity(count)}
        stylePressable={styles.pressable2}
      >
        {"Check"}
      </SecondaryButton> */}
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
  },
  countContainer: {
    flexDirection: "row",
  },
  input: {
    borderColor: Palete.darkGray,
    borderRadius: 6,
    borderWidth: 1,
    width: "30%",
    marginHorizontal: "5%",
    textAlign: "center",
  },
  pressable: {
    width: "12%",
  },
  pressable2: {
    width: "65%",
    padding: "1%",
  },
});
