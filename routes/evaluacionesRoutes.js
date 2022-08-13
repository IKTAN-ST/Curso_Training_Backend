import express from "express";
//Importamos los controladores
import { registrar, obtenerEvaluaciones, obtenerEvaluacion, eliminarEvaluacion, actualizarEvaluacion } from "../controllers/evaluacionesController.js";
const router = express.Router();
//Ruta para residuos
router.route("/").post(registrar).get(obtenerEvaluaciones);

router
    .route('/:id')
    .get(obtenerEvaluacion).delete(eliminarEvaluacion).put(actualizarEvaluacion);

export default router;