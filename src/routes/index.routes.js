import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import usuariosRoutes from "./usuarios.routes.js";
import carritosRoutes from "./carritos.routes.js";

const router = Router();

router.use("/productos", productosRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/carrito", carritosRoutes);

export default router;
