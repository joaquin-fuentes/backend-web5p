import { validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatedErrors = errors.array().map((err) => ({
      field: err.path || err.param, // el campo que falló
      message: err.msg, // el mensaje de error
      value: err.value, // el valor recibido
    }));
    return res.status(400).json({
      message: "Errores de validación",
      errors: formatedErrors,
      totalErrors: formatedErrors.length,
    });
  }
  next();
};
