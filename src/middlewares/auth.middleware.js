import jwt from "jsonwebtoken";
export const validarToken = (req, res, next) => {
  try {
    const tokenCompleto = req.headers.authorization;
    // validar formato del token
    if (!tokenCompleto?.startsWith("Bearer")) {
      return res.status(401).json({ msg: "Formato de Token inválido" });
    }
    //   "Bearer ljahsdilasd7y7ayl3uy4l7iqwtyl7adshdasd"
    //   [Bearer, ljahsdilasd7y7ayl3uy4l7iqwtyl7adshdasd]
    // formatear el nombre del token para quitar la palabra "Bearer"
    const token = tokenCompleto.split(" ")[1];
    const usuarioInfoDecodificada = jwt.verify(token, process.env.SECRET_KEY);
    console.log(usuarioInfoDecodificada.rol);
    if (usuarioInfoDecodificada.rol === "admin") {
      next();
    } else {
      return res.status(401).json({ msg: "Usuario NO AUTORIZADO" });
    }
  } catch (error) {
    return res.status(401).json({ msg: "ERROR DE AUTORIZACION", error });
  }
};
