import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  confirmPassword: string()
    .required("La confirmacion de la contraseña es requerida")
    .oneOf([ref("password")], "Las contraseñas no coinciden"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener 6 o más caracteres"),
  email: string().required("El email es requerido").email("Mail invalido"),
});

export const loginSchema = object().shape({
  password: string()
    .required("Introduzca su contraseña")
    .min(6, "La contraseña debe tener mínimo 6 caracteres"),
  email: string().required("El email es requerido").email("Mail invalido"),
});
