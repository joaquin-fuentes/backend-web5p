import { Router } from "express";
import {
  crearProductoController,
  editarProductoController,
  eliminarProductoController,
  obtenerProductoPorIdController,
  obtenerProductosController,
} from "../controllers/productos.controller.js";
const router = Router();

// Devuelve todos los productos
router.get("/", obtenerProductosController);
// Obtener un solo producto por id
router.get("/:id", obtenerProductoPorIdController);
// Crear un nuevo producto
router.post("/", crearProductoController);
// Encontrar un producto por su id y editarlo
router.put("/:id", editarProductoController);
// Eliminar un producto por su id
router.delete("/:id", eliminarProductoController);

export default router;
