import { body, param } from "express-validator";
import { handleValidationErrors } from "../middlewares/validationErrors.middleware.js";

export const validarProductos = [
  // aqui hago las validaciones de un body o formulario del front
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 1, max: 100 })
    .withMessage("El nombre debe tener entre 1 y 100 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage("El nombre solo puede contener letras, numeros y espacios"),
  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isFloat({ min: 0.01 })
    .withMessage("El precio debe ser un número mayor que 0"),

  // si existen errores, mostrarlos
  // aqui va a ir una funcion que maneja los erroers
  handleValidationErrors,
];
