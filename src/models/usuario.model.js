import mongoose from "mongoose";
import { rolesPermitidos } from "../const/roles.js";

const { Schema } = mongoose;

const UsuarioSchema = new Schema(
  {
    usuario: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    urlImagen: {
      type: String,
      match:
        /^https?:\/\/[^\s\/$.?#].[^\s]*\.(?:jpg|png|webp|avif|svg)(?:\?.*)?(?:#.*)?$/i,
    },
    password: { type: String, required: true },
    rol: {
      type: String,
      enum: rolesPermitidos,
      default: "usuario",
    },
    idCarrito: { type: String },
  },
  {
    timestamps: true,
  }
);

// crear el modelo con su schema
export const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
