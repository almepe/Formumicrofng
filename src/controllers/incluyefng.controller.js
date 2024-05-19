import {getConexion, sql} from '../bd/conexion'
//import { sql } from '../bd/conexion';
//CONSULTAR DATOS
export const getFormulario = async (req,res)=>{
    try {
        const pool = await getConexion();
        const result2 = await pool.request().query('SELECT * FROM Incluyefng');
        //console.log(result2);
        res.json(result2.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
//INSERTAR DATOS 
export const createNewFormu = async (req,res)=>{
    const {Numdocument, Nombres, Apellidos, Iddocument, Celular, Email, Coddepart, Codmunicip, Hatenidocreditosconentidadesfinancieras, Tienereportesnegativosencentralesriesgos} = req.body;

    if(Numdocument == ' ' || Nombres == null || Apellidos == null || Iddocument == null || Celular == null || Email == null || Coddepart == null || Codmunicip == null || Hatenidocreditosconentidadesfinancieras == null || Tienereportesnegativosencentralesriesgos == null){
        return res.status(400).json({msg:"Bad Request: Por favor llene todos los campos del formulario."});
    }
    
    try {
        const pool1 = await getConexion();
        const result1 = await pool1.request()
        .input('Numdocument',sql.Int,Numdocument)
        .input('Nombres',sql.VarChar,Nombres)
        .input('Apellidos',sql.VarChar,Apellidos)
        .input("Iddocument",sql.Int,Iddocument)
        .input("Celular",sql.BigInt,Celular)
        .input("Email",sql.VarChar,Email)
        .input("Coddepart",sql.Int,Coddepart)
        .input("Codmunicip",sql.Int,Codmunicip)
        .input("Hatenidocreditosconentidadesfinancieras",sql.VarChar,Hatenidocreditosconentidadesfinancieras)
        .input("Tienereportesnegativosencentralesriesgos",sql.VarChar,Tienereportesnegativosencentralesriesgos).query('INSERT INTO Incluyefng (Numdocument, Nombres, Apellidos, Iddocument, Celular, Email, Coddepart, Codmunicip, Hatenidocreditosconentidadesfinancieras, Tienereportesnegativosencentralesriesgos) VALUES (@Numdocument, @Nombres, @Apellidos, @Iddocument, @Celular, @Email, @Coddepart, @Codmunicip, @Hatenidocreditosconentidadesfinancieras, @Tienereportesnegativosencentralesriesgos)');
        //console.log(result1.recordset);
        res.json(result1.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//CONSULTAR DATOS POR ID
export const getFormularioById = async (req,res)=>{
    const {iddoc} = req.params;
    const Numdocument = iddoc;
    const pool = await getConexion();
    const result = await pool.request().input("Numdocument",Numdocument)
    .query('SELECT * FROM Incluyefng WHERE Numdocument = @Numdocument');
    //console.log("Numdocument:",Numdocument);
    //console.log(result);
    res.json(result.recordset);
};
//DELETE DE LOS DATOS POR ID
export const deleteFormularioById = async (req,res)=>{
    const{iddoc}=req.params;
    const Numdocument = iddoc;
    const pool = await getConexion();
    const result = await pool.request().input("Numdocument",Numdocument)
    .query('DELETE FROM Incluyefng WHERE Numdocument = @Numdocument');
    if(result.rowsAffected == 1){
        console.log('Se elimino el dato.');
    };
    //res.json(result);

};

//ACTUAlIZAR
export const updateFormularioById = async(req,res)=>{
    const {Numdocument, Nombres, Apellidos, Iddocument, Celular, Email, Coddepart, Codmunicip, Hatenidocreditosconentidadesfinancieras, Tienereportesnegativosencentralesriesgos} = req.body;
    const {iddoc} = req.params;
    const Numdoc = iddoc;
    if(Numdocument == ' ' || Nombres == null || Apellidos == null || Iddocument == null || Celular == null || Email == null || Coddepart == null || Codmunicip == null || Hatenidocreditosconentidadesfinancieras == null || Tienereportesnegativosencentralesriesgos == null){
        return res.status(400).json({msg:"Bad Request: Por favor llene todos los campos del formulario."});
    }
    const pool = await getConexion();
    const result = await pool.request().input("Nombres",sql.VarChar,Nombres)
    .input("Apellidos",sql.VarChar,Apellidos)
    .input("Iddocument",sql.Int,Iddocument)
    .input("Celular",sql.BigInt,Celular)
    .input("Email",sql.VarChar,Email)
    .input("Coddepart",sql.Int,Coddepart)
    .input("Codmunicip",sql.Int,Codmunicip)
    .input("Hatenidocreditosconentidadesfinancieras",sql.VarChar,Hatenidocreditosconentidadesfinancieras)
    .input("Tienereportesnegativosencentralesriesgos",sql.VarChar,Tienereportesnegativosencentralesriesgos)
    .input("Numdocument",sql.Int,Numdocument).input("Numdoc",Numdoc)
    .query('UPDATE Incluyefng SET Nombres=@Nombres, Apellidos=@Apellidos, Iddocument=@Iddocument, Celular=@Celular, Email=@Email, Coddepart=@Coddepart, Codmunicip=@Codmunicip, Hatenidocreditosconentidadesfinancieras=@Hatenidocreditosconentidadesfinancieras, Tienereportesnegativosencentralesriesgos=@Tienereportesnegativosencentralesriesgos, Numdocument=@Numdocument WHERE Numdocument=@Numdoc');
    //console.log({Nombres,Apellidos,Numdocument});
};

