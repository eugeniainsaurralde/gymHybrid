import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Text,
} from "react-native";

import { Palete } from "../globals/Palete";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";

const Search = ({ onHandlerKeyWord }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handlerInput = (t) => setInput(t);

  const search = () => {
    onHandlerKeyWord(input);
    Keyboard.dismiss();

    const expression = /[^a-zA-Z0-9\s]/;
    if (expression.test(input)) {
      setError("Caracteres invalidos");
    }
    setError("");
  };
  const reset = () => {
    setInput("");
    onHandlerKeyWord("");
    setError("");
    Keyboard.dismiss();
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Buscar producto"
          style={styles.textInput}
          value={input}
          onChangeText={handlerInput}
        />
        <Pressable onPress={search}>
          <EvilIcons name="search" size={40} color={Palete.secondary} />
        </Pressable>
        <Pressable onPress={reset}>
          <EvilIcons name="close" size={35} color={Palete.primary} />
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
  },
  textInput: {
    borderWidth: 2,
    borderColor: Palete.darkGray,
    borderRadius: 5,
    padding: "2%",
    flex: 1,
  },
});
