import express from "express";
//Importamos los controladores
import { registrar, obtenerRespuestas } from "../controllers/respuestasController.js";
const router = express.Router();
//Ruta para residuos
router.route("/").post(registrar).get(obtenerRespuestas);
export default router;