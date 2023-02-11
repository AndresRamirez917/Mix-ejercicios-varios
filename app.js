// EJERCICIO DIFERENCIA OBJETO Y MAPA
Persona = {
    nombre: "Andrés",
    apellido: "Ramirez",
    edad : 43
}

for(let a in Persona){
    console.log("Todos las llaves de un objeto tienen que ser: " + typeof a)
}

let Auto = new Map();
Auto.set("Marca", "Mazda"),
Auto.set("Modelo", 2023),
Auto.set(1900, "Caballos de fuerza")

Auto.forEach((valor, indice, Auto) =>{
    console.log("Las llaves de un mapa pueder ser: " + typeof(indice))
})
console.log("")

// EJERCICIO INVOCACIÓN DE UNA FUNCIÓN CON APPLY Y CALL
const sumar = (a,b) => {    
    return a + b;
}

console.log("Llamado normal de la función " + sumar(2,3));
console.log("Llamado de la función con apply " + sumar.apply(null, [2, 3]));
console.log("Llamado de la función con call " + sumar.call(null, 2, 3));

// FUNCIONES DE EJECUCIÓN INMEDIATA, NO HAY NECESIDAD DE LLAMARLAS
(function(a,b){
    return console.log(a+b);
})(2,3);

// USO DE FUNCIÓN INMEDIATA PARA CAMBIAR EL COLOR DE FONDO DE UN HTML CUANDO SE ACEPTE EL ALERT 
(function(){
    console.log("Al hacer click en la página cambiará su color de fondo")
    document.addEventListener("click", () =>{
        document.body.style.backgroundColor = "red";
    })
    
})();
console.log("")

// USO DE FUNCIÓN ANÓNIMA COMO PROPIEDAD DE UN OBJETO
let auto = {
    color: "rojo",
    radio: true,
    radioApagado: true,
    encenderRadio: function(){
        return this.radioApagado = false
    }
}
console.log(auto)
console.log("Radio apagado?: " + auto.encenderRadio() + ", el radio se acaba de encender");
console.log("")

// LLAMADO DE UN VALOR RETORNADO DE UNA FUNCIÓN PARA SER USADO EN OTRA
const Sum = function(a, b){
    return a + b;
}

let resultadoSuma = Sum(4,7)

const resta = function(a,b){
    return resultadoSuma - b;
}

console.log("El resultado de la resta entre el valor retornado de Sum() y la función resta es: " + resta(resultadoSuma,10))
console.log("")

// EJERCICIO USO DE RETURN
const sumaArray = function(array){
    return array.reduce((valorActual, valorSiguiente)=>{
        return valorActual + valorSiguiente
    })
}
let nums = [1,2,3,4,5];
console.log("La suma de los números dentro del array es: " + sumaArray(nums))

let sumArr = sumaArray([1,2,3,4,5]);
console.log(sumArr);
console.log(sumArr + 5)
console.log("")

// EJERCICIO USO PARAMETROS REST
const add = function(...valores){
    return valores.reduce((valorActual, valorSiguiente) =>{
        return valorActual + valorSiguiente
    })
}

let sumTotal = add(1,2,3,4,5,6,7,8,9,10);
console.log(sumTotal)
console.log("")

// EJERCICIO ACCEDER A ATRIBUTOS DE UN OBJETO A TRAVÉS DE UNA FUNCIÓN CON DESTRUCTURACIÓN
const accederAtributo = function({nombre, edad}){
     console.log("Atributo nombre accedido desde el objeto " + nombre); 
     console.log("Atributo edad accedido desde el objeto " + edad);
    
}

let user = {
    nombre: "andres",
    edad: 43
}

accederAtributo(user)
console.log("")

//  EJERCICIO CON FUNCIONES DE EJECUCIÓN INMEDIATA O IIFE
let numbers = [1,2,3,4,5];
let resultad = (function(valores){
        return valores.reduce((numeroActual, numeroSiguiente)=>{
        return numeroActual + numeroSiguiente
    })
})(numbers);
console.log("La suma de los valores es: " + resultad)
console.log("")

// EJERJCICIO FUNCIONES GENERADORAS USO DE SENTENCIAS YIELD PARA ENTREGAR OBJETOS DE FORMA PARCIAL
function * generarCadenas(){
    yield "JavaScript";
    yield "es";
    yield "una rrrga";
}

let obtenerCadenas = generarCadenas();
console.log(obtenerCadenas.next());
console.log(obtenerCadenas.next());
console.log(obtenerCadenas.next());
console.log(obtenerCadenas.next());
console.log("")

// EJERCICIO FUNCIONES FLECHA
let nume = [1,2,3,4,5]
const sumaFlecha = nume.reduce((valorActual, valorSiguiente) => {return valorActual + valorSiguiente});

console.log("La suma de los valores con la función flecha es: " + sumaFlecha)
console.log("")

// PARAMETRO POR DEFECTO DE UNA FUNCIÓN
const restar = function(a=4,b=5){
    return a + b;
}

console.log("Usando los parametros por defecto " + restar())
console.log("Pasándole parametros a la función " + restar(6,1))
console.log("")

// EJERCICIO PASAR PARAMETROS A UNA FUNCIÓN GENERADORA
const generaEnteros = function * (limite){
    for(let i = 1; i < limite; i ++){
        yield i
    }
}

let genEnt = generaEnteros(5);
console.log(genEnt.next());
console.log(genEnt.next());
console.log(genEnt.next());
console.log(genEnt.next());
console.log(genEnt.next());
console.log("")

// EJERCICIO PASAR UN ARREGLO A UNA FUNCIÓN GENERADORA
let ents = [1,2,3,4,5]
const generaEnts = function * (array){
    for(let i  of array){
        yield i
    }
} 

let genents = generaEnts(ents);
for(let val of genents){
    console.log(val)
}
console.log("")

// EJERCICIO SECUENCIA DE ESCAPE EN PLANTILLAS 
let frase = `\t javascript es una chimbita, \n y estamos aprendiendo a diario un poquito mas que ayer`
console.log(frase)
console.log("")

// EJERCICIO USO DE SYMBOL PARA DARLE UNA PROPIEDAD ÚNICA A UN OBJETO
const ID = Symbol();
let People = {
    [ID]: "12345",
    nombre: "Andrés",
    edad: 43
};

console.log(People)
console.log("")

// EJERCICIO DARLE A UNA PROPIEDAD SYMBOL UNA DESCRIPCIÓN
const ID2 = Symbol("Mensaje descriptivo para la propiedad symbol");
let People2 = {
    [ID2]: "12345",
    nombre: "Andrés",
    edad: 43
};

console.log(People2)
console.log("")

// EJERCICIO CREACIÓN DE PROXY
let handler = {
    get: function(target, name){
        return name in target ? target[name] : "No existe la propiedad " + name;
    }
}

let proxy = new Proxy(People2, handler)
console.log(`Creación de un proxy para conocer la edad de ${proxy.nombre} = ${proxy.edad}`)
console.log("")

// EJERCICIO USO DE UN PROXY PARA LA VALIDACIÓN DE PROPIEDADES DE UN OBJETO
let validador = {
    set: function(objeto, propiedad, valor){
        if(propiedad === "edad"){
            if(!Number.isInteger(valor)){
                throw new TypeError("La edad no es un valor numérico");
            }
            if(valor > 130){
                throw new RangeError("La edad no puede ser mayor a 130 años");
            }
        }
        objeto[propiedad] = valor;
        return true;
    }
}

let proxy2 = new Proxy({}, validador)
proxy2.name = "Andres";
proxy2.apellido = "ramirez";
proxy2.edad = 20
// ERRORES DE VALIDACIÓN QUE MANEJA EL HANDLER
// proxy2.edad = "yuca";
// proxy2.edad = 150;
console.log("Validación de propiedades de un objeto usando un proxy" + proxy2)
console.log("")

// EJERCICIO USO DE PROXY PARA VALIDAR SI UNA LLAVE EN UN OBJETO EMPIEZA POR UN DETERMINADO CARACTER
let handler1 = {
    has (target, llave){
        if(llave[0] === "_"){
            return false;
        }
        return llave in target
    }
}

let persona3 = {
    _nombre: "Andres",
    apellido: "ramirez",
    edad: 43,
    _raza: "ario superios"
}

let proxy3 = new Proxy(persona3, handler1);
console.log(proxy3)
console.log("La llave _nombre existe en persona3")
console.log("_nombre" in persona3)
console.log("")

// EJERCICIO GETTERS Y SETTERS PARA OBTENER Y ASIGNAR VALORES A LOS ATRIBUTOS DE UN OBJETO
class Persona4 {
    constructor(nombre, apellido, edad ){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(apellido){
        return this._apellido = apellido
    }

    get edad(){
        return this._edad;
    }

    set nombre(edad){
        return this._edad = edad
    }

    saludar(){
        return "hola mi nombre es " + this.nombre
    }
}

let NuevaPersona = new Persona4("Andrés", "Ramirez", 43)
console.log("El nombre almacenado en el atributo nombre es: " + NuevaPersona.nombre);
NuevaPersona._nombre = "Carlos";
console.log("Después de asignar el nuevo nombre ahora el atributo tiene el valor de: " + NuevaPersona.nombre)
console.log("")

// EJERCICIO CREACIÓN DE HERENCIA
class Estudiante extends Persona4{
    constructor(nombre, apellido, email, mayor){
        super(nombre, apellido);
        this.email = email;
        this.mayor  = mayor;
    }    
}

let estudiante = new Estudiante("Andres", "Ramirez", "andres@mail.com", true);
console.log(estudiante)
console.log(estudiante.saludar())
console.log("")

// EJERCICIO CARGA DE FUNCIÓN A TRAVÉS DE LA ETIQUETA BODY
const cargaBody = function(){
    console.log("Mensaje cargado desde el llamado de la función en la etiqueta body del index.html")
    console.log("Se pueden ejecutar funciones desde el index.html sin estar dentro de unas etiquetas script")
}
console.log("")

// EJERCICIO LLAMADO DE FUNCIÓN DESDE HTML SIN LA ETIQUETA SCRIPT
let clickBoton = function(){
    document.getElementById("#boton")
    boton.innerText = "hola"
}
console.log("")

function seleccionarLenguaje(){
    let cbxLenguajes = document.getElementById("cbxLenguajes");
    let lenguaje = cbxLenguajes.value;

    document.getElementById("lblLenguajeSeleccionado").innerText = `Ud ha seleccionado el lenguaje ${lenguaje}`
}
console.log("")

// EJERCICIO CAPTURA DE ERRORES DE JAVASCRIPT Y CAMBIARLOS POR ERRORES PERSONALIZADOS
let arrayy= [];
try {
    arrayy = new Array(-1)    
} catch (RangeError) {
    console.log("El rango del array no puede ser negativo")
}
console.log("Ejercicio para captura de errores")
console.log("")

// EJERCICIO CAPTURA DE ERRORES DE JAVASCRIPT Y CAMBIARLOS POR ERRORES PERSONALIZADOS
let resulta;
try {
    resulta = 5/null   
} catch (ReferenceError) {
    console.log("Se produjo un error de tipo ReferenceError")
}
console.log("Ejercicio para captura de errores de tipo Reference se debe ejecutar desde la consola de visual")
console.log("")

// EJERCICIO CREACIÓN DE UNA CLASE ERROR PERSONALIZADO
class divisionCeroError extends Error{
    constructor(mensaje){
        super(mensaje)
    }
}

function dividir(a, b){
    try {
        if(b != 0){
            return a/b
        }
        throw new divisionCeroError("La división entre cero no es permitida")
    } catch (error) {
        throw(error)
    }
}

console.log("El resultado de la división es: " + dividir(5,5))
console.log("Para ver el error, se debe de hacer la división por cero")
console.log("")

// EJERCICIO BUSCAR NÚMEROS EN UNA CADENA DE TEXTO
let cadena = "La fecha de nacimiento de carolina es el 7 del 09 de 1.985"
let patron = /\d+/g;
//let patron2 = /\d+\.\d+/g; para que busque solo números con decimales
let numeros1 = cadena.match(patron)
console.log("Números contenidos en la cadena, ojo devuelve un array ");
console.log(numeros1)
console.log("");

// EJERCICIO BUSCAR UNA CADENA EN UN TEXTO CON EXEC
let patron2 = /carolina/;
let cad2 = patron2.exec(patron2);
console.log("El valor devuelto por patron2.exec almacenado en un array es ");
console.log(cad2);
console.log("");

// EJERCICIO BUSQUEDA DE UNA CADENA CON .TEST Y ASIGNANDO UNA EXPRESIÓN REGULAR A UNA CLASE
let pat = /\d+/g;
let nuevaRegExp = new RegExp(pat);
let cad3 = "123 y la concha de su madre";
console.log("El resultado de la busqueda devuelte true o false")
let resp = nuevaRegExp.test(cad3);
console.log(resp)
console.log("")

// EJERCICIO EXTRAER EL NOMBRE DE UN ARCHIVO DE UNA CADENA DE CARÁCTERES
let bookName = "el manga de los_caballeros_del_zodiaco.pdf es la hostia";
let patronBusqueda = /([a-z_]+\.pdf)/;
let salida = patronBusqueda.exec(bookName)
console.log(salida)   
console.log("")

// EJERCICIO FETCH PARA TRAER DATA DE UN SERVIDOR Y MOSTRARLA 
let url = "https://randomuser.me/api/?results=10";
fetch(url)
.then((response)=>response.json())
.then((data) => {
    console.log("La respuesta al fetch es: ")
    console.log(data)
}).catch((error)=>{
    console.log(error)
});
console.log("")

// OBTENER DATOS DE GITHUB DE UN USUARIO CON FETCH
let url2 = "https://api.github.com/users/AndresRamirez917";
fetch(url2)
.then((response) => response.json())
.then((data)=>{
    console.log("Datos usuario github: ")
    console.log(data);
}).catch((error)=>{
    console.log(error)
});
console.log("")

// CREACIÓN DE UN ARCHIVO CON TEXTO DESDE FETCH - EJECUTAR DESDE LA CONSOLA PARA QUE FUNCIONE
let fs = require("fs");
fs.appendFile("F:/Andrés-Proyectos Programación/Ejerjcicios Jhon Ortiz Ordoñez/creacion_archivo_desde_fetch.txt", "hola Javascript", (error)=>{
    if(error){
        throw error
    }
    console.log("El archivo se ha generado satisfactoriamente")
})


// CREACIÓN DE UNA SOLICITUD ASINCRONA CON UN OBJETO XMLHTTPREQUEST -EJECUTAR DESDE CONSOLA DEL NAVEGADOR
const xhttpp = new XMLHttpRequest();
xhttpp.onreadystatechange = () =>{
    if(this.readyState == 4 && this.status == 200){
        console.log(xhttpp.responseText)
    }
}
xhttpp.open("GET", "https://randomuser.me/api/?results=10", true);
xhttpp.send()

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

// EJERCICIO PROMESAS - EJECUTAR DESDE LA CONSOLA
let promes = new Promise(function(res, rej){
    const a = 1;
    const b = 1;

    if(a == b){
        res()
    }else{
        rej()
    }
});
 promes
 .then(function(){
    console.log("La ejecución ha sido edsitosa")
 }) 
 .catch(function(){
    console.log("la ejecución ha fallado")
 })

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

 // EJERCICIO PROMESAS2 -  EJECUTAR EN CONSOLA
 let prom = new Promise(function(res, rej){
    // SIEMPRE VA A SER RES POR QUE ES LO ÚNICO QUE LLAMANMOS EN EL CUERPO DE LA FUNCIÓN
    res("la suma de los valores ha sido concluída")
 })
 prom.then(function(mensaje){
    console.log(mensaje);
 },  function(error){
    console.log(error)
 })

 // EJERCICIO MÚLTIPLES PROMESAS USANDO EL MÉTODO STATIC ALL DE PROMISE -  EJECUTAR DESDE LA CONSOLA
 Promise.all([
    new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=> resolve(2), 2000)),
    new Promise(resolve => setTimeout(()=> resolve(3), 1000)),
 ]).then(console.log);
 console.log("Las promesas se ejecutan todas a la vez, no se suman los tiempos")
 console.log("La primera dura 3 segundos, pero a la vez se ejecuta la de 2 segundos y la primera de 1 segundo")
 console.log("Por eso es que todas se muestran de una vez")