// CREAR UN ARCHIVO DE TEXTO PLANO USANDO UN OBJECT PROMISE - EJECUTAR DESDE LA CONSOLA
 let fs1 = require("fs");
 let promesaCrearArchivo = new Promise((res, rej)=>{
fs1.writeFile("F:/Andrés-Proyectos Programación/Ejerjcicios Jhon Ortiz Ordoñez/creacion_archivo_desde_prmise.txt", "Hola Javascript desde promise", (error) =>{
    if(error){
        rej(error)
    }else{
        res()
    }
})
 })
 
 promesaCrearArchivo
 .then(() =>{
    console.log("La creación del archivo ha sido exitosa")
 })
 .catch((error)=>{
    console.log("Ha ocurrido un error" + error)
 })


 // EJERCICIO USO DE LA LIBRERÍA REQUEST DE NODE.JS PARA SOLICITUDES ASÍNCRONAS
let request3 = require("request");
let url3 = "https://randomuser.me/api/?results=10";
request3(url3, (error, response, body) =>{
    if(error){
        throw error;
    }
    let result = JSON.parse(body);
    console.log("Madre" + result)
})

// CREACIÓN DE UN ARCHIVO CON TEXTO DESDE FETCH - EJECUTAR DESDE LA CONSOLA PARA QUE FUNCIONE
let fs = require("fs");
fs.appendFile("F:/Andrés-Proyectos Programación/Ejerjcicios Jhon Ortiz Ordoñez/creacion_archivo_desde_fetch.txt", "hola Javascript", (error)=>{
    if(error){
        throw error
    }
    console.log("El archivo se ha generado satisfactoriamente")
})
