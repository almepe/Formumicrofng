import { config } from "dotenv"
config();
//console.log(process.env.PORT); //validar el puerto que esta en la variable de entorno en el archivo .env
export default{
    port: process.env.PORT || 3000
}