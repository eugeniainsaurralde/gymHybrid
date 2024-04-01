import { StyleSheet, View, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { Palete } from "../globals/Palete";
import Input from "../components/Input";
import PrimaryButton from "../components/wrappers/PrimaryButton";
import ShadowPrimary from "../components/wrappers/ShadowPrimary";

import { useRegisterMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/Auth/authSlice";
import { registerSchema } from "../validations/authSchema";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [triggerRegister] = useRegisterMutation();

  const onHandleEmail = (t) => {
    setEmail(t);
  };
  const onHandlePassword = (t) => {
    setPassword(t);
  };
  const onHandleConfirmPassword = (t) => {
    setConfirmPassword(t);
  };
  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      dispatch(setUser({ email: data.email, idToken: data.idToken }));
    } catch (error) {
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          break;
        case "password":
          setPasswordError(error.message);
          break;
        case "confirmPassword":
          setConfirmPasswordError(error.message);
          break;
        default:
          break;
      }
    }
  };
  return (
    <View style={styles.container}>
      <ShadowPrimary style={styles.content}>
        <View style={styles.topContent}>
          <Input
            placeholder={"E-mail"}
            onHandle={onHandleEmail}
            value={email}
            error={emailError}
          />
          <Input
            placeholder={"Contraseña"}
            onHandle={onHandlePassword}
            value={password}
            isSecure={true}
            error={passwordError}
          />
          <Input
            placeholder={"Confirmar contraseña"}
            onHandle={onHandleConfirmPassword}
            value={confirmPassword}
            isSecure={true}
            error={confirmPasswordError}
          />
        </View>
        <View style={styles.bottomContent}>
          <PrimaryButton
            stylePressable={styles.pressable}
            styleText={styles.pressableText}
            onPress={onSubmit}
          >
            {"Crear cuenta"}
          </PrimaryButton>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>¿Ya tenes una cuenta?</Text>
          </Pressable>
        </View>
      </ShadowPrimary>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palete.darkWhite,
    justifyContent: "center",
  },
  content: {
    backgroundColor: Palete.lightGray,
    height: "57%",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginBottom: "15%", //Es porque no me toma la altura del encabezado y por lo tanto no queda en medio.
    padding: "7%",
    borderRadius: 8,
  },
  topContent: {
    height: "60%",
    justifyContent: "space-between",
  },
  bottomContent: {
    justifyContent: "space-between",
    height: "27%",
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
