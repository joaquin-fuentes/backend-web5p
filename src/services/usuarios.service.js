import { UsuarioModel } from "../models/usuario.model.js";
import argon from "argon2";
import jwt from "jsonwebtoken";

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
      email: datosUsuario.email,
    });
    // preguntar si el usuario existe
    if (!usuarioExistente) {
      return {
        statusCode: 404,
        json: { msg: "Email o Contrasenia incorrecto - USUARIO" },
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
        json: { msg: "Email o Contrasenia incorrecto - PASSWORD" },
      };
    }
    const rolValido = ["vendedor", "admin", "usuario"].includes(
      usuarioExistente.rol
    );

    // devolver informacion al frontend
    const payload = {
      usuario: usuarioExistente.usuario,
      email: usuarioExistente.email,
      rol: usuarioExistente.rol,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // devolver el dato del usuario existente
    return {
      statusCode: 201,
      json: {
        msg: `Bienvenido ${
          rolValido ? usuarioExistente.rol : "ROL DESCONOCIDO"
        }`,
        usuarioLogueado: payload,
        token,
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      json: { msg: "Error al loguear usuario", usuarioLogueado: null },
    };
  }
};
