import express from "express";
//Importamos los controladores
import { registrar } from "../controllers/pruebaController.js";
const router = express.Router();
//Ruta para residuos
router.route("/").post(registrar);
export default router;