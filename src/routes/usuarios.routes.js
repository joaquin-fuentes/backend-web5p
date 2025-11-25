import { Router } from "express";
import {
  loginUsuariocontroller,
  registroUsuarioController,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.post("/registro", registroUsuarioController);
router.post("/login", loginUsuariocontroller);

export default router;
