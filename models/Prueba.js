import mongoose from 'mongoose';

const pruebaSchema = mongoose.Schema(
    
    {
    1: {
        pregunta:{
            type: String
        },
        respuestaA:{
            type: String,
            trim: true,
        },
        respuestaB:{
            type: String,
            trim: true,
        },
        respuestaC:{
            type: String,
            trim: true,
        },
        respuestaD:{
            type: String,
            trim: true,
        }
    },
    0: {
        pregunta:{
            type: String
        },
        respuestaA:{
            type: String,
            trim: true,
        },
        respuestaB:{
            type: String,
            trim: true,
        },
        respuestaC:{
            type: String,
            trim: true,
        },
        respuestaD:{
            type: String,
            trim: true,
        }
    },
   
 },
 
 
 
 
 
 );

const Prueba= mongoose.model('Prueba', pruebaSchema)

export default Prueba;