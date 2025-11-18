import {
  crearProductoServicio,
  editarProductoServicio,
  eliminarProductoServicio,
  obtenerProductoPorIdServicio,
  obtenerProductosServicio,
} from "../services/productos.service.js";

export const obtenerProductosController = async (req, res) => {
  const { json, statusCode } = await obtenerProductosServicio();
  res.status(statusCode).json(json);
};

export const obtenerProductoPorIdController = async (req, res) => {
  const id = req.params.id;
  const { json, statusCode } = await obtenerProductoPorIdServicio(id);
  res.status(statusCode).json(json);
};

export const crearProductoController = async (req, res) => {
  const nuevoProducto = req.body;
  const { statusCode, json } = await crearProductoServicio(nuevoProducto);
  res.status(statusCode).json(json);
};

export const editarProductoController = async (req, res) => {
  const id = req.params.id;
  const { statusCode, json } = await editarProductoServicio(id, req.body);
  res.status(statusCode).json(json);
};

export const eliminarProductoController = async (req, res) => {
  const id = req.params.id;
  const { statusCode, json } = await eliminarProductoServicio(id);
  res.status(statusCode).json(json);
};
