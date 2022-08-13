//importamos el model de la bd
import Evaluaciones from "../models/Evaluaciones.js"
const registrar =async (req,res) =>{
    /*
    //muestra los datos que llegan en variables con posman
    const{nombre,correo} = req.body;
    console.log(nombre);
    console.log(correo);
    console.log(req.body); */
    //Guardan los datos con posman
    try{

        const evaluacion = new Evaluaciones(req.body);
        const guardarEvaluacion = await evaluacion.save();
        res.json({guardarEvaluacion});

    }catch(error){
        console.log(error);
    }
};
const obtenerEvaluaciones = async (req, res) => {
    const evaluacion = await Evaluaciones.find();
    res.json(evaluacion);
};
const obtenerEvaluacion = async (req, res) => {
    const {id} = req.params;
    const evu = await Evaluaciones.findById(id);    
    res.json(evu);
};
const eliminarEvaluacion = async (req, res) => {
    const {id} = req.params;
    const evu = await Evaluaciones.findById(id);
    try {
        await evu.deleteOne();
        res.json({msg: 'Paciente eliminado'});
    } catch (error) {
        console.log(error);
    }
};

const actualizarEvaluacion = async (req, res) => {
    const {id} = req.params;
    const evu = await Evaluaciones.findById(id);

    // Actualizar Cliente
    evu.tipoEvaluacion = req.body.tipoEvaluacion || evu.tipoEvaluacion;
    evu.nombreEvaluacion = req.body.nombreEvaluacion || evu.nombreEvaluacion;
    evu.pregunta01 = req.body.pregunta01 || evu.pregunta01;
    evu.respuesta01A = req.body.respuesta01A || evu.respuesta01A;
    evu.respuesta01B = req.body.respuesta01B || evu.respuesta01B;
    evu.respuesta01C = req.body.respuesta01C || evu.respuesta01C;
    evu.respuesta01D = req.body.respuesta01D || evu.respuesta01D;
    evu.pregunta02 = req.body.pregunta02 || evu.pregunta02;
    evu.respuesta02A = req.body.respuesta02A || evu.respuesta02A;
    evu.respuesta02B = req.body.respuesta02B || evu.respuesta02B;
    evu.respuesta02C = req.body.respuesta02C || evu.respuesta02C;
    evu.respuesta02D = req.body.respuesta02D || evu.respuesta02D;
    evu.pregunta03 = req.body.pregunta03 || evu.pregunta03;
    evu.respuesta03A = req.body.respuesta03A || evu.respuesta03A;
    evu.respuesta03B = req.body.respuesta03B || evu.respuesta03B;
    evu.respuesta03C = req.body.respuesta03C || evu.respuesta03C;
    evu.respuesta03D = req.body.respuesta03D || evu.respuesta03D;
    evu.pregunta04 = req.body.pregunta01 || evu.pregunta04;
    evu.respuesta04A = req.body.respuesta04A || evu.respuesta04A;
    evu.respuesta04B = req.body.respuesta04B || evu.respuesta04B;
    evu.respuesta04C = req.body.respuesta04C || evu.respuesta04C;
    evu.respuesta04D = req.body.respuesta04D || evu.respuesta04D;
    evu.pregunta05 = req.body.pregunta05 || evu.pregunta05;
    evu.respuesta05A = req.body.respuesta05A || evu.respuesta05A;
    evu.respuesta05B = req.body.respuesta05B || evu.respuesta05B;
    evu.respuesta05C = req.body.respuesta05C || evu.respuesta05C;
    evu.respuesta05D = req.body.respuesta05D || evu.respuesta05D;
    evu.pregunta06 = req.body.pregunta06 || evu.pregunta06;
    evu.pregunta07 = req.body.pregunta07 || evu.pregunta07;
    evu.pregunta08 = req.body.pregunta08 || evu.pregunta08;
    evu.pregunta09 = req.body.pregunta09 || evu.pregunta09;
    evu.pregunta10 = req.body.pregunta10 || evu.pregunta10;

    try {
        const evaluacionActualizado = await evu.save();
        res.json(evaluacionActualizado);
    } catch (error) {
        console.log(error);
    }
};   


export { registrar, obtenerEvaluaciones, obtenerEvaluacion, eliminarEvaluacion, actualizarEvaluacion};
//Probar con posman
/* 
{
    "nombre": "vic Dessire",
    "email": "vicgg@gmail.com",
    "respuesta01": "Protocolo de acuerdo de paris",
    "respuesta02": "Todas las anteriores",
    "respuesta03": "Mantenimiento correctivo",
    "respuesta04": "Balance de materia",
    "respuesta05": "Fuga",
    "respuesta06": "Establecimiento de una año base y un programa de deteccion y reparacion",
    "respuesta07": "Transparencia y coeficiencia",
    "respuesta08": "Compresores, bombas neumaticas sepadrores y tanques",
    "respuesta09": "dklhwsedlnkjw",
    "respuesta10": "Siguiente paro programado o 6 meses despues de detectada, que ocurra primero",
    "respuesta11": "si se puede",
    "respuesta12": "djhfbsdnfd",
    "respuesta13": "esdkfljslkdfjs",
    "respuesta14": "kidsjsljd",
    "respuesta15": "kjdfhskjdenwskjd",
    "respuesta16": "klewdfjnlkdj",
    "respuesta17": "likedjsalidj",
    "respuesta18": "lkdefjslkd",
    "respuesta19": "ejkfdhskj",
    "respuesta20": "kwqjdghwkajsdh",
    "respuesta21": "klwiejdhewsqkedh",
    "respuesta22": "ekjdfehsdf",
    "respuesta23": "dfewrdhw",
    "respuesta24": "dwejhnwed",
    "respuesta25": "kdhjsk"
}
*/