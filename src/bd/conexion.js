//CONEXION A LA BASE DE DATOS
import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();
const dbconfiguracion = {
    user: process.env.DB_USER,//'fngmicro',
    password: process.env.DB_PASSWORD,//'Abcd*2024',
    server:process.env.DB_SERVER,//'localhost', //Cuando se habla de server se escribe la dirección IP,pero como esta de forma local se puede dejar LOCALHOST
    database:process.env.DB_NAME,///'Inclusionfinan',
    options:{
        encrypt: true, //PARA LA CONEXIÓN A AZURE
        trustServerCertificate: true, //CAMBIAR A true para trabajar de forma local o desarrollo
    },
};
export async function getConexion(){
    try{
        const conect= await sql.connect(dbconfiguracion);
        //const result= await sql.query('SELECT * FROM Departamento WHERE Codigo=8');
        //console.log(result);
        return conect;
    } catch(error){
        console.error(error);
    }
}
export {sql}
//getConexion(); //EN ESTA LINEA SE LLAMA LA FUNCIÓN PARA QUE SE CONECTE
