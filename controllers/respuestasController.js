import Usuarios from "../models/Respuestas.js"
const registrar =async (req,res) =>{
    try{

        const usuario = new Usuarios(req.body);
        const guardarUsuario = await usuario.save();
        res.json({guardarUsuario});

    }catch(error){
        console.log(error);
    }
};
const obtenerRespuestas = async (req, res) => {
    const usuario = await Usuarios.find();
    res.json(usuario);
};

export { registrar, obtenerRespuestas};

