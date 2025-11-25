import { UsuarioModel } from "../models/usuario.model.js";
import argon from "argon2";

export const registroUsuarioServicio = async (datosUsuario) => {
  try {
    const nuevoUsuarioDB = new UsuarioModel(datosUsuario);
    nuevoUsuarioDB.password = await argon.hash(nuevoUsuarioDB.password);
    await nuevoUsuarioDB.save();
    return {
      statusCode: 201,
      json: { msg: "Usuario Creado", usuarioCreado: nuevoUsuarioDB },
    };
  } catch (error) {
    return {
      statusCode: 400,
      json: { msg: "Error al crear usuario", usuarioCreado: null },
    };
  }
};

export const loginUsuarioServicio = async (datosUsuario) => {
  try {
    const usuarioExistente = await UsuarioModel.findOne({
      usuario: datosUsuario.usuario,
    });
    // preguntar si el usuario existe
    if (!usuarioExistente) {
      return {
        statusCode: 404,
        json: { msg: "Usuario o Contrasenia incorrecto - USUARIO" },
      };
    }
    // comprobar la contraseña
    const contraseniaOK = await argon.verify(
      usuarioExistente.password,
      datosUsuario.password
    );
    if (!contraseniaOK) {
      return {
        statusCode: 404,
        json: { msg: "Usuario o Contrasenia incorrecto - PASSWORD" },
      };
    }

    // devolver el dato del usuario existente
    return {
      statusCode: 201,
      json: {
        msg: "Usuario Logueado con éxito",
        usuarioLogueado: usuarioExistente,
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      json: { msg: "Error al loguear usuario", usuarioLogueado: null },
    };
  }
};
