import {
  crearProductoServicio,
  editarProductoServicio,
  eliminarProductoServicio,
  obtenerProductoPorIdServicio,
  obtenerProductosServicio,
} from "../services/productos.service.js";

export const obtenerProductosController = (req, res) => {
  const { json, statusCode } = obtenerProductosServicio();
  res.status(statusCode).json(json);
};

export const obtenerProductoPorIdController = (req, res) => {
  const id = Number(req.params.id);
  const { json, statusCode } = obtenerProductoPorIdServicio(id);
  res.status(statusCode).json(json);
};

export const crearProductoController = (req, res) => {
  const nuevoProducto = req.body;
  const { statusCode, json } = crearProductoServicio(nuevoProducto);
  res.status(statusCode).json(json);
};

export const editarProductoController = (req, res) => {
  const id = Number(req.params.id);
  const { statusCode, json } = editarProductoServicio(id, req.body);
  res.status(statusCode).json(json);
};

export const eliminarProductoController = (req, res) => {
  const id = Number(req.params.id);
  const { statusCode, json } = eliminarProductoServicio(id);
  res.status(statusCode).json(json);
};
