import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const respuestasSchema = mongoose.Schema({
    nombreEvaluacion:{// todos los objetos que tengan * se mandara el valor automatico sin preguntarle al usuario  *
        type: String,
        //required: true,
        trim: true
    },
    tipoEvaluacion:{ //Diagnostica o final   *
        type: String,
        trim: true,
    },
    nombre:{
        type: String,
        //required: true,
        trim: true
    },
    apellido:{
        type: String,
        //required: true,
        trim: true
    },
    email:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta01:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta02:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta03:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta04:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta05:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta06:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta07:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta08: {
        type: String,
        //required: true,
        trim: true
    },
    respuesta09:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta10:{
        type: String,
        //required: true,
        trim: true
    },
    evaluacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evaluaciones',
    }
    
});
//Se crea el registro del modelo
const usuarios = mongoose.model("Respuestas", respuestasSchema);
export default usuarios;