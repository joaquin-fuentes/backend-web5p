import {
  loginUsuarioServicio,
  registroUsuarioServicio,
} from "../services/usuarios.service.js";

export const registroUsuarioController = async (req, res) => {
  const { json, statusCode } = await registroUsuarioServicio(req.body);
  res.status(statusCode).json(json);
};

export const loginUsuariocontroller = async (req, res) => {
  const { json, statusCode } = await loginUsuarioServicio(req.body);
  res.status(statusCode).json(json);
};
