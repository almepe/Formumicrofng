import {getConexion} from '../bd/conexion'

//SECCION DONDE SE REALIZARAN LAS CONSULTAS.
export const getDepartamentos = async (req,res)=>{
    try {
        const pool1 = await getConexion();
        const result = await pool1.request().query("SELECT * FROM Departamento");
        //console.log(result);
        res.json(result.recordset); //Para visualizarlo en el navegador.    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
//INGRESAR A LA BASE DE DATOS