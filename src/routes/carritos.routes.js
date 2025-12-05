import { Router } from "express";
import { validarToken } from "../middlewares/auth.middleware.js";
import { agregarProductoCarrito } from "../controllers/carrito.controller.js";

const router = Router();

router.post("/:id", validarToken, agregarProductoCarrito);

export default router;
