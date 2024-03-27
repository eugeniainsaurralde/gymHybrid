import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState } from "react";

import { useLoginMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/Auth/authSlice";

import { Palete } from "../globals/Palete";
import PrimaryButton from "../components/wrappers/PrimaryButton";
import ShadowPrimary from "../components/wrappers/ShadowPrimary";
import Input from "../components/Input";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleEmail = (t) => {
    setEmail(t);
  };
  const onHandlePassword = (t) => {
    setPassword(t);
  };
  const onSubmit = async () => {
    const { data } = await triggerLogin({ email, password });
    dispatch(setUser({ email: data.email, idToken: data.idToken }));
  };
  return (
    <View style={styles.container}>
      <ShadowPrimary style={styles.content}>
        <View style={styles.topContent}>
          <Input
            placeholder={"E-mail"}
            onHandle={onHandleEmail}
            value={email}
          />
          <Input
            placeholder={"Contraseña"}
            onHandle={onHandlePassword}
            value={password}
            isSecure={true}
          />
        </View>
        <View style={styles.bottomContent}>
          <PrimaryButton
            stylePressable={styles.pressable}
            styleText={styles.pressableText}
            onPress={onSubmit}
          >
            {"Iniciar sesion"}
          </PrimaryButton>
          <Pressable>
            <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text}>¿No tenes cuenta?</Text>
          </Pressable>
        </View>
      </ShadowPrimary>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
    justifyContent: "center",
  },
  content: {
    backgroundColor: Palete.lightGray,
    height: "50%",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginBottom: "15%", //Es porque no me toma la altura del encabezado y por lo tanto no queda en medio.
    padding: "7%",
    borderRadius: 8,
  },
  topContent: {
    justifyContent: "space-between",
    height: "40%",
  },
  bottomContent: {
    justifyContent: "space-between",
    height: "43%",
  },
  pressable: {
    padding: "5%",
  },
  pressableText: {
    fontSize: 25,
  },
  text: {
    textAlign: "center",
    color: Palete.darkGray,
  },
});
