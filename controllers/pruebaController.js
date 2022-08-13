import Prueba from "../models/Prueba.js"
const registrar =async (req,res) =>{
    try{

        const prueba = new Prueba(req.body);
        const guardarPrueba = await prueba.save();
        res.json({guardarPrueba});

    }catch(error){
        console.log(error);
    }
};

export { registrar};
