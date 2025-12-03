import express from "express";
import routes from "./src/routes/index.routes.js";
import { connectDB } from "./src/db/config.db.js";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());
app.use(morgan("dev"));

// aqui va mi conexion
connectDB();

// acceder a las rutas
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto:", PORT);
});
