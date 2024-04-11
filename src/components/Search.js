import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Text,
} from "react-native";

import { Palete } from "../data/globals/Palete";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";

const Search = ({ onHandlerKeyWord }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handlerInput = (t) => setInput(t);

  const search = () => {
    onHandlerKeyWord(input);
    Keyboard.dismiss();

    const expression = /^[a-zA-Z0-9_]+$/;
    if (expression.test(input)) {
      setError("");
    } else {
      setError("Caracteres invalidos");
      onHandlerKeyWord("");
    }
  };
  const reset = () => {
    setInput("");
    onHandlerKeyWord("");
    setError("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.conteiner}>
      <View style={styles.content}>
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  conteiner: {
    padding: "5%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: Palete.darkGray,
    borderRadius: 5,
    padding: "2%",
    flex: 1,
  },
  error: {
    color: Palete.primary,
  },
});
