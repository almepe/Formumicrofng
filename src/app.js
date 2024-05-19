//Este es el primer archivo que se va a configurar
import express, { urlencoded } from 'express'
import config from './config'
import departamentosRoutes from './routes/departamento.routes'
import incluyefngRoutes from './routes/incluyefng.routes'
const app = express() 
//CONFIGURACIÓN
//let port;
//app.set('port',config.port || 3000) //SI EL PUERTO NO SE ENCUENTRA EL SISTEMA LO TOMARA POR DEFECTO QUE EN ESTE CASO SERIA EL PUERTO 3000.
app.set('port',config.port); //CON LA NUEVA CONFIGURACIÓN DONDE LA VALIDACIÓN DEL PUERTO ESTA EN LAS VARIABLES DE ENTORNO.

//middlewares--CONFIGURACIÓN DE LAS RUTAS PORQUE EL SERVIDOR NO ESTA CONFIGURADO PARA QUE ACEPTE DATOS EN JSON, por lo que se escriben estas dos lineas.
app.use(express.json());
//app.use(express,urlencoded({extended:false}));
app.use(departamentosRoutes); //PARA USAR LA RUTA DE LOS DEPARTAMENTOS QUE ESTAN LA CARPETA "routes"
app.use(incluyefngRoutes);



export default app