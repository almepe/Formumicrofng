//ACA SE ARRANCA LA APLICACIÓN
import app from './app'
//import './bd/conexion' //SE QUITA PORQUE ERA PARA PRUEBAS DE LA CONSULTA.
app.listen(app.get('port'))

console.log('Servidor en el puerto', app.get('port'));