import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const evaluacionesSchema = mongoose.Schema({
  descripcion: {
    type: String,
    trim: true,
  },
  tipoEvaluacion: {
    //final o diagnostica
    type: String,
    required: true,
    trim: true,
  },
  nombreEvaluacion: {
    type: String,
    required: true,
    trim: true, // eliminamos espacios en blanco
  },
  pregunta01: {
    type: String,
    //required: true,
    trim: true,
  },
  respuesta01A: {
    type: String,
    trim: true,
  },
  respuesta01B: {
    type: String,
    trim: true,
  },
  respuesta01C: {
    type: String,
    trim: true,
  },
  respuesta01D: {
    type: String,
    trim: true,
  },
  pregunta02: {
    type: String,
    //required: true,
    trim: true,
  },
  respuesta02A: {
    type: String,
    trim: true,
  },
  respuesta02B: {
    type: String,
    trim: true,
  },
  respuesta02C: {
    type: String,
    trim: true,
  },
  pregunta03: {
    type: String,
    //required: true,
    trim: true,
  },
  respuesta03A: {
    type: String,
    trim: true,
  },
  respuesta03B: {
    type: String,
    trim: true,
  },
  pregunta04: {
    type: String,
    //required: true,
    trim: true,
  },
  respuesta04A: {
    type: String,
    trim: true,
  },
  respuesta04B: {
    type: String,
    trim: true,
  },
  pregunta05: {
    type: String,
    //required: true,
    trim: true,
  },
  respuesta05A: {
    type: String,
    trim: true,
  },
  respuesta05B: {
    type: String,
    trim: true,
  },
  pregunta06: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta07: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta08: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta09: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta10: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta11: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta12: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta13: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta14: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta15: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta16: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta17: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta18: {
    type: String,
    //required: true,
    trim: true,
  },
  pregunta19: {
    type: String,
    //required: true,
    trim: true,
  },
});

//Se crea el registro del modelo
const evaluacion = mongoose.model("Evaluaciones", evaluacionesSchema);
export default evaluacion;
