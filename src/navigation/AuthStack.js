import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Palete } from "../globals/Palete";

import Header from "../components/Header";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthStack = ({ setIdToken }) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => {
        return {
          headerTitle: () => {
            return (
              <Header
                title={
                  route.name === "Login" ? "Inicio de sesion" : "Registrate"
                }
                color={Palete.primary}
              />
            );
          },
          headerStyle: {
            backgroundColor: Palete.darkWhite,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        initialParams={{ setIdToken }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
