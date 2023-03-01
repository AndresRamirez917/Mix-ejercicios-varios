// EJERCICIO DIFERENCIA OBJETO Y MAPA
console.log("DIFERENCIA ENTRE OBJETO Y MAPA")
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
console.log("USO DE FUNCIÓN ANÓNIMA COMO PROPIEDAD DE UN OBJETO")
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
console.log("LLAMANDO DE UN VALOR RETORNADO DE UNA FUNCIÓN PARA SER USADO EN OTRA")
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
console.log("USO DE RETURN")
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
console.log("USO DE PARAMETROS REST")
const add = function(...valores){
    return valores.reduce((valorActual, valorSiguiente) =>{
        return valorActual + valorSiguiente
    })
}

let sumTotal = add(1,2,3,4,5,6,7,8,9,10);
console.log(sumTotal)
console.log("")

// EJERCICIO ACCEDER A ATRIBUTOS DE UN OBJETO A TRAVÉS DE UNA FUNCIÓN CON DESTRUCTURACIÓN
console.log("ACCEDER A ATRIBUTOS DE UN OBJETO A TRAVÉS DE UNA FUNCIÓN CON DESTRUCTURACIÓN")
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
console.log("FUNCIONES DE EJECUCIÓN INMEDIATA O IIFE")
let numbers = [1,2,3,4,5];
let resultad = (function(valores){
        return valores.reduce((numeroActual, numeroSiguiente)=>{
        return numeroActual + numeroSiguiente
    })
})(numbers);
console.log("La suma de los valores es: " + resultad)
console.log("")

// EJERJCICIO FUNCIONES GENERADORAS USO DE SENTENCIAS YIELD PARA ENTREGAR OBJETOS DE FORMA PARCIAL
console.log("FUNCIONES GENERADORAS USO DE SENTENCIAS YIELD PARA ENTREGAR OBJETOS DE FORMA PARCIAL")
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
console.log("FUNCIONES FLECHA")
let nume = [1,2,3,4,5]
const sumaFlecha = nume.reduce((valorActual, valorSiguiente) => {return valorActual + valorSiguiente});

console.log("La suma de los valores con la función flecha es: " + sumaFlecha)
console.log("")

// PARAMETRO POR DEFECTO DE UNA FUNCIÓN
console.log("PARÁMETRO POR DEFECTO DE UNA FUNCIÓN")
const restar = function(a=4,b=5){
    return a + b;
}

console.log("Usando los parametros por defecto " + restar())
console.log("Pasándole parametros a la función " + restar(6,1))
console.log("")

// EJERCICIO PASAR PARAMETROS A UNA FUNCIÓN GENERADORA
console.log("PASAR PARÁMETROS A UNA FUCNIÓN GENERADORA")
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
console.log("PASAR UN ARREGLO A UNA FUNCIÓN GENERADORA")
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
console.log("SECUENCIA DE ESCAPE EN PLANTILLAS")
let frase = `\t javascript es una chimbita, \n y estamos aprendiendo a diario un poquito mas que ayer`
console.log(frase)
console.log("")

// EJERCICIO USO DE SYMBOL PARA DARLE UNA PROPIEDAD ÚNICA A UN OBJETO
console.log("USO DE SYMBOL PARA DARLE UNA PROPIEDAD ÚNICA A UN OBJETO")
const ID = Symbol();
let People = {
    [ID]: "12345",
    nombre: "Andrés",
    edad: 43
};

console.log(People)
console.log("")

// EJERCICIO DARLE A UNA PROPIEDAD SYMBOL UNA DESCRIPCIÓN
console.log("DARLE A UNA PROPIEDAD SYMBOL UNA DESCRIPCIÓN")
const ID2 = Symbol("Mensaje descriptivo para la propiedad symbol");
let People2 = {
    [ID2]: "12345",
    nombre: "Andrés",
    edad: 43
};

console.log(People2)
console.log("")

// EJERCICIO CREACIÓN DE PROXY
console.log("CREACIÓN DE PROXY")
let handler = {
    get: function(target, name){
        return name in target ? target[name] : "No existe la propiedad " + name;
    }
}

let proxy = new Proxy(People2, handler)
console.log(`Creación de un proxy para conocer la edad de ${proxy.nombre} = ${proxy.edad}`)
console.log("")

// EJERCICIO USO DE UN PROXY PARA LA VALIDACIÓN DE PROPIEDADES DE UN OBJETO
console.log("USO DE UN PROXY PARA LA VALIDACIÓN DE PROPIEDADES DE UN OBJETO")
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
console.log("USO DE PROXY PARA VALIDAR SI UNA LLAVE EN UN OBJETO EMPIEZA POR UN DETERMINADO CARACTER")
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
console.log("GETTETS Y SETTERS PARA OBTENER Y ASIGNAR VALORES A LOS ATRIBUTOS DE UN OBJETO")
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
console.log("CREACIÓN DE HERENCIA")
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
console.log("CARGA DE FUNCIÓN A TRAVÉS DE LA ETIQUETA BODY")
const cargaBody = function(){
    console.log("Mensaje cargado desde el llamado de la función en la etiqueta body del index.html")
    console.log("Se pueden ejecutar funciones desde el index.html sin estar dentro de unas etiquetas script")
}
console.log("")

// EJERCICIO LLAMADO DE FUNCIÓN DESDE HTML SIN LA ETIQUETA SCRIPT
console.log("LLAMADO DE FUCIÓN DESDE HTML SIN LA ETIQUETA SCRIPT")
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
console.log("CAPTURA DE ERRORES DE JAVASCRIPT Y CAMBIARLOS POR ERRORES PERSONALIZADOS")
let arrayy= [];
try {
    arrayy = new Array(-1)    
} catch (RangeError) {
    console.log("El rango del array no puede ser negativo")
}
console.log("Ejercicio para captura de errores")
console.log("")

// EJERCICIO CAPTURA DE ERRORES DE JAVASCRIPT Y CAMBIARLOS POR ERRORES PERSONALIZADOS
console.log("CAPTURA DE ERRORES DE JAVASCRIPT Y CAMBIARLOS POR ERRORES PERSONALIZADOS 2")
let resulta;
try {
    resulta = 5/null   
} catch (ReferenceError) {
    console.log("Se produjo un error de tipo ReferenceError")
}
console.log("Ejercicio para captura de errores de tipo Reference se debe ejecutar desde la consola de visual")
console.log("")

// EJERCICIO CREACIÓN DE UNA CLASE ERROR PERSONALIZADO
console.log("CREACIÓN DE UNA CLASE ERROR PERSONALIZADO")
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
console.log("BUSCAR NÚMEROS EN UNA CADENA DE TEXTO")
let cadena = "La fecha de nacimiento de carolina es el 7 del 09 de 1.985"
let patron = /\d+/g;
//let patron2 = /\d+\.\d+/g; para que busque solo números con decimales
let numeros1 = cadena.match(patron)
console.log("Números contenidos en la cadena, ojo devuelve un array ");
console.log(numeros1)
console.log("");

// EJERCICIO BUSCAR UNA CADENA EN UN TEXTO CON EXEC
console.log("BUSCAR UNA CADENA EN UN TEXTO CON EXEC")
let patron2 = /carolina/;
let cad2 = patron2.exec(patron2);
console.log("El valor devuelto por patron2.exec almacenado en un array es ");
console.log(cad2);
console.log("");

// EJERCICIO BUSQUEDA DE UNA CADENA CON .TEST Y ASIGNANDO UNA EXPRESIÓN REGULAR A UNA CLASE
console.log("BÚSQUEDA DE UNA CADENA CON .TEST Y ASIGNANDO UNA EXPRESIÓN REGULAR A UNA CLASE")
let pat = /\d+/g;
let nuevaRegExp = new RegExp(pat);
let cad3 = "123 y la concha de su madre";
console.log("El resultado de la busqueda devuelte true o false")
let resp = nuevaRegExp.test(cad3);
console.log(resp)
console.log("")

// EJERCICIO EXTRAER EL NOMBRE DE UN ARCHIVO DE UNA CADENA DE CARÁCTERES
console.log("EXTRAER EL NOMBRE DE UN ARCHIVO DE UNA CADENA DE CARÁCTERES")
let bookName = "el manga de los_caballeros_del_zodiaco.pdf es la hostia";
let patronBusqueda = /([a-z_]+\.pdf)/;
let salida = patronBusqueda.exec(bookName)
console.log(salida)   
console.log("")

// EJERCICIO FETCH PARA TRAER DATA DE UN SERVIDOR Y MOSTRARLA 
console.log("FETCH PARA TRAER DATA DE UN SERVIDOR Y MOSTRARLA")
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
console.log("DATOS DE GITHUB DE UN USUARIO CON FETCH")
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



// CREACIÓN DE UNA SOLICITUD ASINCRONA CON UN OBJETO XMLHTTPREQUEST -EJECUTAR DESDE CONSOLA DEL NAVEGADOR
console.log("CREACIÓN DE UNA SOLICITUD ASIGNADA CON UN OBJETO XMLHTTPREQUEST - EJECUTAR DESDE CONSOLA DEL NAVEGADOR")
const xhttpp = new XMLHttpRequest();
xhttpp.onreadystatechange = () =>{
    if(this.readyState == 4 && this.status == 200){
        console.log(xhttpp.responseText)
    }
}
xhttpp.open("GET", "https://randomuser.me/api/?results=10", true);
xhttpp.send()
console.log("");


// EJERCICIO PROMESAS - EJECUTAR DESDE LA CONSOLA
console.log("PROMESAS - EJECUTAR DESDE LA CONSOLA")
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
 console.log("");
 
 // EJERCICIO PROMESAS2 -  EJECUTAR EN CONSOLA
 console.log("PROMESAS2 - EJECUTAR EN CONSOLA")
 let prom = new Promise(function(res, rej){
    // SIEMPRE VA A SER RES POR QUE ES LO ÚNICO QUE LLAMANMOS EN EL CUERPO DE LA FUNCIÓN
    res("la suma de los valores ha sido concluída")
 })
 prom.then(function(mensaje){
    console.log(mensaje);
 },  function(error){
    console.log(error)
 })
 console.log("");

 // EJERCICIO MÚLTIPLES PROMESAS USANDO EL MÉTODO STATIC ALL DE PROMISE -  EJECUTAR DESDE LA CONSOLA
 console.log("MÚLTIPLES PROMESAS USANDO EL MÉTODO STATIC ALL DE PROMISE - EJECUTAR DESDE LA CONSOLA")
 Promise.all([
    new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=> resolve(2), 2000)),
    new Promise(resolve => setTimeout(()=> resolve(3), 1000)),
 ]).then(console.log);
 console.log("Las promesas se ejecutan todas a la vez, no se suman los tiempos");
 console.log("La primera dura 3 segundos, pero a la vez se ejecuta la de 2 segundos y la primera de 1 segundo");
 console.log("Por eso es que todas se muestran de una vez");
 console.log("");

 // EJERCICIO MÚLTIPLES SOLICITUDES GET COMO OBJETOS USANDO ALL - EJECUTAR DESDE LA CONSOLA
 console.log("MÚLTIPLES SOLICITUDES GET COMO OBJETOS USANDO ALL - EJECUTAR DESDE LA CONSOLA")
 let urls = ["https://randomuser.me/api/?results=10", "https://randomuser.me/api/?results=5", "https://randomuser.me/api/?results=1"]
 let solicitudes = urls.map(url => fetch(url));
Promise.all(solicitudes)
.then(respuestas => respuestas.forEach(r => console.log(`${r.url}; ${r.status}`)));
console.log("");

// EJERCICIO EXTRAER UNA SUBCADENA DE CARACTERES A PARTIR DE UNA FRASE
console.log("EXTRAER UNA SUBCANDENA DE CARACTERES A PARTIR DE UNA FRASE")
let phrase = "Existen varios lenguajes de programación. Entre ellos: Javascript, Php, C++, y Java."
let inicio = phrase.indexOf(":");
let fin = phrase.lastIndexOf(".");
//let fin = phrase.indexof(".", inicio); LINEA 546 Y 547 SON EQUIVALENTES 
let listaLenguajes = phrase.substring(inicio + 1, fin)
console.log("Indice inicial " + inicio);
console.log("Indice final " + fin);
console.log("Array de lenguajes " + listaLenguajes)
let arraListaLenguajes = listaLenguajes.split(",")
console.log("La subcadena contiene los lenguajes de programación " + arraListaLenguajes)

const extraerSubcadena = function(cadena){
    let inicio = phrase1.indexOf(":");
    let fin = phrase1.lastIndexOf(".");
    let arraListaLenguajes = phrase1.substring(inicio + 1, fin).split(",");
    arraListaLenguajes.forEach((element, indice, array)=>{
        array[indice] = element.trim();
    })

    
    return arraListaLenguajes;
}
let phrase1 = 'Existen varios lenguajes de programación. Entre ellos: Javascript, Php, C++, Java.';
let resultado3 = extraerSubcadena(phrase1);
console.log(resultado3);
console.log("");

// EJERCICIO FUNCIÓN PARA VALIDAR SI UNA VARIABLE HA SIDO DEFINIDA, ES DIFERENTE DE VACIO Y DE NULL, 
// Y VALIDA TAMBIÉN SI ES UNA CADENA DE CARACTERES
// class variableExiste extends Error{
//     constructor(mensaje){
//         super(mensaje)
//     }
// }
// const validaVariable = function(variable){
//     try {
//         if(typeof variable == "undefined"){
//             return true;
           
//         } throw new variableExiste(`La variale ${variable} ya fue definida en el archivo`)
//     } catch (error) {
//         throw(error)
//     }
// }
//console.log(validaVariable(auto))

console.log("UNDEFINED Y NULL")
const validator = function(cadenaa){
    return typeof cadenaa != "undefined" && cadenaa != null && cadenaa.length > 0 && typeof cadenaa.valueOf() == "string"
}

console.log(`La cadena cumpe con las condiciones? ${validator(0)}` )
console.log("")

// EJERCICIO REMPLAZO DE CARACTERES USANDO EL MÉTODO REPLACE
console.log("REEMPLAZO DE CARÁCTERES USANDO EL MÉTODO REPLACE")
let estring = "Kotlin es tremando, Python es genial";
let expregul = /\b[A-Z][a-z]{5}\b/g;
// let expregul = new RegExp("[A-Z][a-z]{5}", "g"); LAS LÍNEAS 567 Y 568 SON EQUIVALENTES EN SU RESULTADO
let resfinal = estring.replace(expregul, "JavaScript")
console.log("cadena original " + estring);
console.log("Cadena despúes de usar el replace:")
console.log(resfinal)
console.log("")

// EJERCICIO BUSQUEDA DE PALABRAS EN UNA FRASE CON REGEXP USANDO CICLO FOR
console.log("BÚSQUEDA DE PALABRAS EN UNA FRASE CON REGEXP USANDO CICLO FOR")
let oracion = `Python es un lenguaje de programación interpretado cuya filosofía hace incapie en la legibilidad de su
código.
Se trata de un lenguaje de programación multiparadigma, ya que sopora orientación a objetos, programación imperativa y, 
en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma. Es administrado por la Python Software Foundation. Posee una licencia de código abierto , denominada Python Sofware Foundation
License 2, que es compatible con la licencia pública general de GNU a partir de la versión 2.1.1 e incompatible en ciertas
versiones anteriores`
let patroncito = /\bm\w*a\b/g
let pattern = /[\^*@!.,"#$%&/()=?¡!¿'\\]/gi;
let ind = [];
let oracion2 = oracion.split(' ')
 for(let i = 0; i < oracion2.length; i++ ){
        if(oracion2[i].match(patroncito)){
         ind.push(oracion2[i].replace(pattern, ""))
        }
 }
// for(element of oracion2){
//     if(element.match(patroncito)){
//         ind.push(element)
//     }
// }
 console.log(String(ind))
console.log("")
 
// EJERCICIO BUSQUEDA DE PALABRAS EN UNA FRASE CON REGEXP USANDO CICLO WHILE
console.log("BÚSQUEDA DE PALABRAS EN UNA FRASE CON REGEXP USANDO CICLO WHILE")
let oracion3 = `Python es un lenguaje de programación interpretado cuya filosofía hace incapie en la legibilidad de su
código.
Se trata de un lenguaje de programación multiparadigma, ya que sopora orientación a objetos, programación imperativa y, 
en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma. Es administrado por la Python Software Foundation. Posee una licencia de código abierto , denominada Python Sofware Foundation
License 2, que es compatible con la licencia pública general de GNU a partir de la versión 2.1.1 e incompatible en ciertas
versiones anteriores`
let patr = /\bm\w*a\b/g;
let resu = "";
let resultadoBusqueda;
while((resultadoBusqueda = patr.exec(oracion3)) != null){
    resu += `En ${resultadoBusqueda.index} se encontró ${resultadoBusqueda[0]}\n`
}
console.log(resu)
console.log("")

// EJERJCICIO FUNCIÓN CALCULO GASTOS VIAJE
console.log("FUNCIÓN CÁLCULO GASTOS VIAJE")
const calculoGastosViaje = function(km, GalonGasolina){
    // 50L ES IGUAL A 13.2 GALONES
    // 346(PESOS) ES EL VALOR DE 1KM RECORRIDO
    // CON EL TANQUE LLENO UN AUTOMOVIL REOCORRE EN PROMEDIO 400KM
    // 138600 CUESTA EL TANQUE LLENO DE UNA CAMIONETA DUSTER
    let galonGasolina;
    let kms = km;
    let precioGalonGasolina = 10.500;
    galonGasolina = precioGalonGasolina;
    let galonALitro = 3.7854;
    let tanqueLleno = galonALitro*13.2;
    let precioTanqueLleno = precioGalonGasolina*13.2; 
    let peajes = 12.000;
    let contadorPeajes = 0;
    let precioKm = ((((GalonGasolina*13.2)/4)/10))/10
    let totalGasolina = (kms*precioKm)*2;
    let promedioPeajes = (((kms/84)-1)*peajes)*2 
    let totalpeajes = Math.round(kms/84)-1
    // console.log(promedioPeajes)
    if(kms >=84){
        let totalGasolina2 = totalGasolina+promedioPeajes
        return console.log(`La gasolina cuesta ${totalGasolina.toFixed(3)}, el número de peajes más o menos es ${totalpeajes}, los peajes de ida y vuelta cuestan ${promedioPeajes.toFixed(3)}, para un total de ${totalGasolina2.toFixed(3)} pesos`)
    }else{
        return console.log(`La cantidad de gasolina ida y vuelta tiene un costo de ${totalGasolina.toFixed(3)} pesos`)
    }
    
}
calculoGastosViaje(37, 10.500) 


function calcularDistancia(lat1, lon1, lat2, lon2) {
  var radioTierra = 6371; // Radio de la Tierra en kilómetros
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distancia = radioTierra * c;
  return distancia;
}

var distancia = calcularDistancia(5.1555556, -75.0402778, 5.235322593, -74.90668089);
console.log("La distancia entre Fresno(Colombia) y Cartagena(Colombia) es de " + distancia + " kilómetros.");


const calcularDistanciaEntreDosCoordenadas = (lat1, lon1, lat2, lon2) => {
    // Convertir todas las coordenadas a radianes
    lat1 = gradosARadianes(lat1);
    lon1 = gradosARadianes(lon1);
    lat2 = gradosARadianes(lat2);
    lon2 = gradosARadianes(lon2);
    // Aplicar fórmula
    const RADIO_TIERRA_EN_KILOMETROS = 6371;
    let diferenciaEntreLongitudes = (lon2 - lon1);
    let diferenciaEntreLatitudes = (lat2 - lat1);
    let a = Math.pow(Math.sin(diferenciaEntreLatitudes / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diferenciaEntreLongitudes / 2.0), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return RADIO_TIERRA_EN_KILOMETROS * c;
};

const gradosARadianes = (grados) => {
    return grados * Math.PI / 180;
};
//CDMX
//19.416326917410476, -99.12479042256915
const cdmx = {
    latitud: 5.186694812,
    longitud: -75.05228995
,
};
// La habana
// 23.097069089850933, -82.35006433419622
const habana = {
    latitud: 10.46343362, 
    longitud: -75.45889915,
};
const distanciaEnKilometros = calcularDistanciaEntreDosCoordenadas(cdmx.latitud, cdmx.longitud, habana.latitud, habana.longitud);
console.log("hola " + distanciaEnKilometros);

function encontrarPalabrasRepetidas(arreglo) {
    var palabrasRepetidas = {};
    console.log()
    for (var i = 0; i < arreglo.length; i++) {
        // SACA DEL ARREGLO LAS PALABRAS Y LAS MUESTRA UNA A UNA EN VARIAS LÍNEAS
      var palabra = arreglo[i];
      console.log(palabra)
      if (palabrasRepetidas[palabra] === undefined) {
        palabrasRepetidas[palabra] = 1;
        console.log(palabrasRepetidas[palabra])
      } else {
        palabrasRepetidas[palabra]++;
        console.log(palabrasRepetidas[palabra])
      }
    }
    return Object.keys(palabrasRepetidas).filter((palabra)=> {
      return palabrasRepetidas[palabra] > 1;
    });
  }

  console.log("El elemento repetido es: " + encontrarPalabrasRepetidas(["carlos", "andres", "andres", "ramirez", "aristizabal", "javascript", "javascript"]))
  console.log("");

  // EJERCICIO BUCLE SOBRE LOS VALORES DE UN OBJETO
  console.log("BUCLE SOBRE LOS VALORES DE UN OBJETO")
  let userr = {
    name: "John",
    age: 30
  };
  
  // bucle sobre los valores
  for (let value of Object.values(userr)) {
    console.log(value); // John, luego 30
  }
  console.log("Bucle sobre los valores de un objeto")
  console.log("");
  // EJERCICIO INVERTIR EL ORDEN DE UN NOMBRE - NO FUNCIONA BIEN
//   let nombre1 = "Andrés Ramirez";
//   let patn1 = /^(\w+)\s(\w+)$/;
//   let resultNombre = patn1.exec(nombre1);
//   let nombreReverse = `${resultNombre[2]}, ${resultNombre[1]}`
//   console.log("Reverse Name")
//   console.log(nombre1);
//   console.log(nombreReverse);

// EJERCICIO REEMPLAZAR ETIQUETAS HTML POR ENTIDADES NOMBRADAS USANDO REPLACE()
console.log("REEMPLAZAR ETIQUETAS HTML POR ENTIDADES NOMBRADAS USANDO REPLACE()")
let html = `<p>Esto es un <spam>Párrafo<spam/></p>`
console.log(html)
html = html.replace(/</g, "&lt;");
html = html.replace(/>/g, "&gt;");
console.log(html);
console.log("")

// EJERCICIC CONVERTIR UNA FECHA EN FORMATO ISO 8601 EN UN OBJETO TIPO FECHA
console.log("CONVERTIR UNA FECHA EN FORMATO ISO 9601 EN UN OBJETO TIPO FECHA")
let fechaIso8601 = "2020-1-22T14:26:19Z"
console.log("Fecha original " + fechaIso8601);
fechaIso8601 = fechaIso8601.replace(/\D/g, " ");
console.log("Fecha con caracteres sólo numéricos " + fechaIso8601);
let components = fechaIso8601.split(" ");
--components[1];
// LA FECHA ORIGINAL ESTA EN MES 1, SIN ESTA LÍNEA EL MES SE SALTA AL 2 
console.log("Fecha convertida a array " + components);
let fecha = new Date(Date.UTC.apply(null, components));
console.log("Comprobar si fecha es un objeto tipo fecha " + typeof fecha);
console.log("Fecha convertida " + fecha);
console.log("Fecha convertida con formato .toString" + fecha.toString())
console.log("")

// EJERCICIO USAR UNA FUNCIÓN ANÓNIMA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()
console.log("USAR UNA FUNCIÓN ANÓNIMA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()")
setTimeout(function(){
    console.log("Muestra este mensaje despúes de 2 segundos")
}, 2000);

// EJERCICIO USAR UNA FUNCIÓN LAMBDA COMO CALLBACK DE LA FUNCION SETTIMEOUT()
console.log("USAR UNA FUNCIÓN LAMBDA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()")
setTimeout(()=>{
    console.log("Mensaje desde una función lambda usada como callback")
}, 2000)

// EJERCICIO USAR UNA FUNCIÓN EXPRESADA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()
console.log("USAR UNA FUNCIÓN EXPRESADA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()")
const showMessage = function(){
    console.log("Mensaje desde una función expresada, usada como callback de la función setTimeOut()");
}
setTimeout(showMessage, 2000);

// EJERCICIO USAR UNA FUNCIÓN NOMBRADA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()
console.log("USAR UNA FUNCIÓN NOMBRADA COMO CALLBACK DE LA FUNCIÓN SETTIMEOUT()")
function showMensaje(){
    console.log("Mensaje desde una función nombrada, usada como callback de la función setTimeOut()")
}
setTimeout(showMensaje, 2000)

// EJERCICIO ANDRES PARA PRUEBNA DE RECORRIDO DE ARRAYS- UNA BOBADA
console.log("ANDRÉS PARA PRUEBA DE RECORRIDO DE ARRAYS - UNA BOBADA")
let arrayNumbers = [1, 2, 3, 10, 50, 70, 100, 120, 200, 250, 300];
    arrayNumbers.forEach((index)=>{
        if(index > 100){
            console.log(`Indice ${arrayNumbers.indexOf(index)}`)
            console.log(`Valor ${index}`)
        }   
    })
   
// EJERCICIO USO DEL MÉTODO FINDINDEX() PARA ENCONTRAR UN ÍNDICE QUE CUMPLA CON UNA CONDICIÓN 
console.log("USO DEL MÉTODO FINDINDEX() PARA ENCONTRAR UN ÍNDICE QUE CUMPLA CON UNA CONDICIÓN")
let arrayNumbers2 = [1, 2, 3, 10, 50, 70, 100, 120, 200, 250, 300];
let indic = arrayNumbers2.findIndex((n)=>{
    return n > 100
})
console.log(indic)
console.log("")

// EJERCICIO "APLANAR UN ARREGLO" BIDIMENSIONAL USANDO CONCAT() Y APPLY(), MÁS FÁCIL CON APPLY()
console.log("APLANAR UN ARREGLO BIDIMENSIONAL USANDO CONCAT() Y APPLY(), MAS FÁCIL CON APPLY()")
let bidimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let arrayAplanado = bidimensionalArray[0].concat(bidimensionalArray[1], bidimensionalArray[2], bidimensionalArray[3]);
let arrayAplanadoConApply = bidimensionalArray.concat.apply([], bidimensionalArray);
console.log(`Array "aplanado" con concat() ${arrayAplanado}`);
console.log(`Array "aplanado" con apply() ${arrayAplanadoConApply}`);
console.log("");

// EJERCICIO ELIMINAR ELEMENTOS DE UN ARRAY CON SPLICE()
console.log("ELIMINAR ELEMENTOS DE UN ARRAY CON SPLICE()")
let colors = ["Negro", "Blanco", "Rojo", "Azul", "Amarillo", "Verde"];
let deletedColor = colors.splice(colors.indexOf("Negro"),1);
let cadenita = colors.toString();
console.log(cadenita)
console.log(cadenita.split(" "))
console.log("")

// EJERCICIO RECORRER ARRAY MULTIDIMENSIONAL CON BUCLES FOR ANIDADOS
console.log("RECORRER ARRAY MULTIDIMENSIONAL CON BUCLES FOR ANIDADOS")
let bidimensionalArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
for(let i = 0; i < bidimensionalArray2.length; i++){
    console.log(`Primera iteración ${bidimensionalArray2}`);
    for(let j = 0; j < bidimensionalArray2[i].length; j++){
        console.log(`Segunda iteración ${bidimensionalArray2}`);
        console.log(`Tercera iteración ${bidimensionalArray2[i][j]}`)
    }
}
console.log("")

// EJERCICIO TABLA DE MULTIPLICAR CON BUCLES FOR ANIDADOS
console.log("TABLA DE MULTIPLICAR CON BUCLES FOR ANIDADOS")
console.log("Bucle anidado for")
for (var i = 1; i <= 1; i++) {
    for (var j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + i*j);
    }
  }
  console.log("")

  // EJERCICIO ITERACIÓN SOBRE OBJETOS ANIDADOS CON BUCLES FOR ANIDADOS
  console.log("ITERACIÓN SOBRE OBJETOS ANIDADOS CON BUCLES FOR ANIDADOS")
  console.log("Bucle anidado for sobre objetos")
  let objects = {
    object1 : {
        nombre: "Carolina",
        apellido: "Del Rio"
    },
    object2 : {
        nombre: "Andrés",
        apellido: "Ramirez"
    }
  }
  for(let key1 in objects){
    for(let key2 in objects[key1]){
        console.log(objects[key1][key2])
    }
  }
  console.log("")
        
  // EJERCICIO TABLA DE MULTIPLICAR HORIZONTAL Y VERTICAL CON BUCLES FOR ANIDADOS
  console.log("TABLA DE MULTIPLICAR HORIZONTAL Y VERTICAL CON BUCLES FOR ANIDADOS")
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += i*j + " ";
    }
    console.log(row);
  }
  console.log("");

  // EJERCICIO SUMA DEL TOTAL DE LOS NÚMEROS DE UN ARRAY MULTIDIMENSIONAL CON BUCLE FOR ANIDADO 
  console.log("SUMA DEL TOTAL DE LOS NÚMEROS DE UN ARRAY MULTIDIMENSIOANL CON BUCLE FOR ANIDADO")
  const matrix = [[1, 2], [3, 4]];
  let sum = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  console.log(sum);
  console.log("");

  // EJERCICIO PIRÁMIDE DE NÚMEROS DEL 1 AL 9
  console.log("PIRÁMIDA DE NÚMEROS DEL 1 AL 9 CON BUCLE FOR ANIDADO")
  for (let i = 1; i <= 9; i+=1) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
  console.log("");

  // EJERCICIO CONTADOR DE VOCALES DE UNA CADENA CON BUCLE FOR ANIDADO
  console.log("CONTADOR DE VOCALES DE UNA CADENA CON BUCLE FOR ANIDADO")
  const text = "Hola, mundo y la kalavera de su madre!";
  let count = 0;
  
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  
  console.log(count);
  console.log("")

  // EJERCICIO REMPLAZAR ELEMENTOS DE UN ARRAY CON SPLICE()
  console.log("REEMPLAZAR ELEMENTOS DE UN ARRAY CON SPLICE()")
  let colores = ["Rojo", "Verde", "Amarillo", "Negro"];
  console.log(`Array de colores original ${colores}`);
  colores.splice(colores.indexOf("Amarillo"), 1, "Gris");
  console.log(`Se elimina el color Amarillo y se reemplaza por Gris ${colores}`);
  colores.splice(-1, 1, "Amatista");
  console.log(`Se elimina el color Negro y se reemplaza por Amatista ${colores}`);
  colores.splice(colores.indexOf("Amatista"), 2, "Azul", "Magenta");
  console.log(`Se elimina el color Amatista y se reemplaza por los colores Azul y Magenta ${colores}`)
  console.log("")

  // EJERCICIO CREAR UNA FUNCIÓN PARA ELIMINAR MÚLTIPLES ELEMENTOS DE UN ARRAY
  console.log("CREAR UNA FUNCIÓN PARA ELIMINAR MÚLTIPLES ELEMENTOS DE UN ARRAY")
  const remplazarMultiplesElementos = function(arr, valor, nuevoValor){
    while(arr.indexOf(valor)!=-1){
        arr.splice(arr.indexOf(valor), 1, nuevoValor)
    }
  }
let Colors = ["Rojo", "Verde", "Amarillo", "Negro"];
console.log(Colors);
remplazarMultiplesElementos(Colors, "Amarillo", "Verde Flori Pepiado");
console.log(Colors)
console.log("")

// EJERCICIO ELIMINAR TODAS LAS OCURRENCIAS DE UN ELEMENTO DENTRO DE UN ARRAY
console.log("ELIMINAR TODAS LAS OCURRENCIAS DE UN ELEMENTO DENTRO DE UN ARRAY")
const eliminarOcurrencias = function(arr, valor){
    while(arr.indexOf(valor) != -1){
        arr.splice(arr.indexOf(valor), 1);
    }
}

let Colors2 = ["Rojo", "Rojo", "Azul", "Amarillo", "Amarillo", "Verde"];
console.log(`Array original ${Colors2}`);
eliminarOcurrencias(Colors2, "Amarillo");
eliminarOcurrencias(Colors2, "Rojo");
console.log(`Nuevo array de colores ${Colors2}`)
console.log("");

// EJERCICIO EXTRAER UNA PORCIÓN DE UN ARREGLO CON LA FUNCIÓN SLICE()
console.log("EXTRAER UNA PORCIÓN DE UN ARREGLO CON LA FUNCIÓN SLICE()")
let Colors3 = ["Blanco", "Negro", "Rojo", "Verde", "Azul", "Gris", "Violeta"];
let coloresPrimarios = Colors3.slice(Colors3.indexOf("Rojo"), Colors3.indexOf("Azul") + 1);
console.log(coloresPrimarios);
console.log("");

// EJERCICIO APLICAR UNA FUNCIÓN A CADA ELEMENTO DE UN ARRAY
console.log("APLICAR UNA FUNCIÓN A CADA ELEMENTO DE UN ARRAY");
let colors4 = ["Negro", "Verde", "Sapote", "Vino Tinto", "Negro"];
console.log(colors4)
colors4.forEach((color, indice, colors4) =>{
    if(color ==="Negro"){
        colors4[indice] = "#####";
    }
})
console.log(colors4);
console.log("");

// EJERCICIO CAMBIAR UN ELEMENTO DE UN ARRAY SIN ALTERAR EL ARRAY ORIGINAL
console.log("CAMBIAR UN ELEMENTO DE UN ARRAY SIN ALTERAR EL ARRAY ORIGINAL")
let colors5 = ["Negro", "Verde", "Sapote", "Vino Tinto", "Negro"];
console.log(colors5);
let resultado = colors5.map((color, indice, colors5)=>{
    return color == "Negro" ? "#####" : color
});
console.log(`Array con cambios ${resultado}`)
console.log(`Array original ${colors5}`);
console.log("");

// EJERCICIO CAMBIAR UN ELEMENTO DE UN ARRAY SIN ALTERAR EL ARRAY ORIGINAL SIMPLIFICADO
console.log("CAMBIAR UN ELEMENTO DE UN ARRAY SIN ALTERAR EL ARRAY ORIGINAL VERSIÓN SIMPLIFICADA")
function cambiarElementos(color, indice, colors6){
    (color == "Negro") && (colors6[indice] = "#####")
}
let colors6 = ["Negro", "Verde", "Sapote", "Vino Tinto", "Negro"];
console.log(colors6);
colors6.forEach(cambiarElementos)
console.log(`Nuevo Array ${colors6}`);
console.log("");

// EJERCICIO CONVERTIR DECIMALES A HEXADECIMALES CON MAP() Y TOSTRING(BASEX)
console.log("CONVERTIR DECIMALES A HEXADECIMALES CON MAP() Y TOSTRING(BASEX)")
let arrayDecimales = [29, 31, 255, 5, 17, 23, 101, 23537];
let hexadecimales = arrayDecimales.map((decimales)=>{
    return decimales.toString(16)
})
console.log(`${arrayDecimales}`);
console.log(`${hexadecimales}`);
console.log("");

// EJERCICIO USO DEL MÉTODO FILTER PARA ELIMINAR UN ELEMENTO DE UN ARRAY
console.log("USO DEL MÉTODO FILTER PARA ELIMINAR UN ELEMENTO DE UN ARRAY")
let colors77 = ["Negro", "Verde", "Sapote", "Vino Tinto", "Negro"];
console.log(colors77)
let nuevoColors = colors77.filter((color)=>{
    return color != "Negro"
})
console.log(`Resultado del array usando el método .filter es ${nuevoColors}`)
console.log("");

// EJERCICIO USO DEL MÉTODO EVERY PARA QUE TODOS LOS ELEMENTOS DE UN ARRAY CUMPLAN UNA CONDICIÓN
let numsMayoresDiez = [10,11,12,13,14,15,16];
let resNumsMayoresDiez = numsMayoresDiez.every((number)=>{
    return number >= 10;
})
console.log(`Todos los elementos del array cumplen la condición?: ${resNumsMayoresDiez}`);
console.log("");

// EJERCICIO USO MÉTODO EVERY COMPROBAR ELEMENTOS CUMPLAN UNA CONDICIÓN
console.log("USO MÉTODO EVERY COMPROBAR ELEMENTOS CUMPLAN UNA CONDICIÓN")
let characterColors = ["n3gro", "v3rde", "4mar1ll0", "r0j0", "azul"];
let proof = /^[a-zA-Z]+$/ //false --let proof = /^[a-zA-Z0-9]+$/ true
let testCharacter = characterColors.every((color)=>{
    return proof.test(color);
})
console.log(`Todos los elementos del array cumplen la condición?: ${testCharacter}`);
console.log("");

// EJERCICIO USO MÉTODO SOME COMPROBAR ELEMENTOS CUMPLAN UNA CONDICIÓN
console.log("USO MÉTODO SOME COMPROBAR ELEMENTOS CUMPLAN UNA CONDICIÓN")
let characterColors1 = ["n3gro", "v3rde", "4mar1ll0", "r0j0", "azul"];
let proof1 = /^[a-zA-Z]+$/
let testCharacter1 = characterColors1.some((color)=>{
    return proof1.test(color);
})
console.log(`Algunos elementos del array cumplen la condición?: ${testCharacter1}`);
console.log("");

// EJERCICIO ITERAR PROPIEDADES DE UN OBJETO CREADO CON LA CLASE OBJECT
console.log("EJERCICIO ITERAR PROPIEDADES DE UN OBJETO CREADO CON LA CLASE OBJECT")
let person = new Object();
person.documento = 12345678;
person.nombre = "Andrés";
person.edad = 43;
person.email = "kalavera@gmail.com";
console.log("El objeto person posee los siguientes valores")
Object.keys(person).forEach((atributo)=>{
    console.log(atributo, person[atributo])
})
console.log("")

// EJERCICIO DESTRUCTURACIÓN DE ARRAYS
console.log("DESTRUCTURACIÓN DE ARRAYS");
let languages = ["JavaScript", "Php", "C++", "C#", "Java"];
let [javascript, php, cpp, csharp, java] = languages;
console.log(javascript);
console.log(php);
console.log(cpp);
console.log(csharp);
console.log(java);
console.log("");

// EJERCICIO CONCEPTO DE HOISTING
// function sumar(a,b){
//     return a + b;
// }

// console.log(`Al declarar la función como "FUNCTION" la puedo llamar antes o después de declararla`)
// console.log(sumar(3,5))

let restarr = function(a,b){
    return a - b;
}
console.log(`Si la función la convierto en función expresada y la llamo después de declararla, no aplica el hoisting`)
console.log(`Entonces mostrará error por que no puede acceder a la variable antes de la inicialización`)
console.log(restarr(3,1));
console.log("");

// EJERCICIO PASAR UNA FUNCIÓN COMO ARGUMENTO DE OTRA FUNCIÓN
console.log("PASAR UNA FUNCIÓN COMO ARGUMENTO DE OTRA FUNCIÓN")
function calcular(fm, x, y){
    return fm(x,y);
}
let suMar = function(a, b){
    return a + b;
}
let Resultado = calcular(suMar, 2, 3);
console.log(`Resultado de pasar una función como argumento de otra función ${Resultado}`);
console.log("");

// EJERCICIO PROGRAMACIÓN IMPERATIVA VS PROGRAMACIÓN FUNCIONAL
console.log("PROGRAMACIÓN IMPERATIVA VS PROGRAMACIÓN FUNCIONAL");
console.log("PROGRAMACIÓN IMPERATIVA, SUMA LOS VALORES DE UN ARRAY CON UN BUCLE FOR");
let arrnums = [2,3,4,5,6,7,8,9];
let sUma = 0;
for(let i = 0; i < arrnums.length; i++){
    sUma += arrnums[i];
}
console.log(sUma);
console.log("PROGRAMACIÓN FUNCIONAL, SUMA LOS VALORES DE UN ARRAY CON EL USO DEL MÉTODO REDUCE()");
let rEsultado = arrnums.reduce((a, b)=>a+b);
console.log(rEsultado)
console.log("");

// EJERCICIO EJEMPLO SENCILLO RECURSIÓN
console.log("EJEMPLO SENCILLO RECURSIÓN");
function reverseArray(array, indice, cadenaVacia){
    return indice == 0 ? cadenaVacia : reverseArray(array, --indice, (cadenaVacia += " " + array[indice]))
}
/* COMO EL ÍNDICE NO VALE 0 SE EJECUTA LA FUNCIÓN REVERSEARRAY QUE TOMA TODO EL CONTENIDO DEL ARRAY, LUEGO RESTA
EN UNO EL INDICE Y LE CONCATENA UN ESPACIO Y EL VALOR QUE TIENE ESE INDICE */
let lEnguajes = ["Javascript", "Php", "C++", "Java", "C#"];
// C# Java C++ Php Javascript
let reSultado = reverseArray(lEnguajes, lEnguajes.length, "");
console.log(reSultado);
console.log("")

// EJERCICIO RECURSIÓN SECUENCIA FIBONACCI
console.log("RECURSIÓN SECUENCIA FIBONACCI");
const Fibonacci = function(n){
    return n < 2 ? n : Fibonacci(n -1) + Fibonacci(n - 2)
}
let secfibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
console.log(`${secfibonacci}`);
console.log(Fibonacci(5));
console.log(Fibonacci(8));
console.log(Fibonacci(11));
console.log("");

// EJERCICIO RECURSIÓN FACTORIAL
console.log("EJERCICIO RECURSIÓN FACTORIAL")
const factorial = function(n){
    return n == 0 || n == 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(7))
console.log("")

//  EJERCICIO RECURSIÓN SUMA
// a = 2, b = 3
console.log("Recursión suma")
const recursionSuma = function(a, b){
    return b == 0 ? a : recursionSuma(a + 1, b - 1);
    //     3        2                   3      2
    //                      5
}
console.log(`El resultado de la suma con recursividad es ${recursionSuma(4,1)}`)
console.log("");

// EJERCICIO RECURSIÓN RESTA
console.log("Recursión resta");
// a = 5, b = 4
const recursionResta = function(a, b){
    return b == 0 ? a : recursionResta(a - 1, b - 1)
/*              4   5                    4      3  
                3   4                    3      2
                2   3                    2      1
                1   2                    1      0
                0 <<1>>                              
                DEVUELVE EL VALOR DE A QUE ES <<1>>*/    
}
console.log(recursionResta(5,4));
console.log("");

// EJERCICIO RETORNAR UNA FUNCIÓN DESDE OTRA FUNCIÓN
console.log("RETORNAR UNA FUNCIÓN DESDE OTRA FUNCIÓN")
let mult = function(a){
    return function(n){
        return a * n
    }
}
let sumax2 = mult(2);
console.log(sumax2(5));
let sumax3 = mult(3);
console.log(sumax3(5));
console.log("");


// EJERCICIO SUMAR LOS ARGUMENTOS DE UNA FUNCIÓN INDEPENDIENTE DE SU REPRESENTACIÓN
console.log("SUMAR LOS ARGUMENTOS DE UNA FUNCIÓN INDEPENDIENTE DE SU REPRESENTACIÓN")
const sumAr = function(){
    let numeros = [].slice.call(arguments);
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += parseFloat(numeros[i])
    }
    return suma
}
console.log(sumAr(5,5,5,5,80));
console.log("");

// EJERCICIO ESPECIFICAR UN PARÁMETRO CON UN VALOR POR DEFECTO
console.log("ESPECIFICAR UN PARÁMETRO CON UN VALOR POR DEFECTO")
const separadorCadena = function(cadena, separadorI="@", separadorD="@"){
    return `${separadorI}${cadena}${separadorD}`
}
console.log(separadorCadena("Andres"))
console.log(separadorCadena("Andrés", "!", "!"))
console.log("");

// EJERCICIO EXTENDER LA FUNCIONALIDAD DE UNA FUNCIÓN CONSTRUCTORA CON PROTOTIPADO
console.log("EXTENDER LA FUNCIONALIDAD DE UNA FUNCIÓN CONSTRUCTORA CON PROTOTIPADO")
function MP3(cancion, artista){
    let _titulo = cancion;
    this.mostrarTitulo = function(){
        return `${artista} - ${_titulo}`
    }
}

MP3.prototype.agregarCategoria = function(nombreCategoria){
    this.nombreCategoria = nombreCategoria;
}
MP3.prototype.mostrarCategoria = function(){
    return this.nombreCategoria;
}

let klavier = new MP3("Klavier", "Ramstein");
console.log(klavier.mostrarTitulo());
klavier.agregarCategoria("Rock");
console.log(klavier.mostrarCategoria());
console.log("")

// EJERCICIO AGREGAR FUNCIONALIDAD AL OBJETO STRING POR MEDIO DE PROTOTYPE
console.log("AGREGAR FUNCIONALIDAD AL OBJETO STRING POR MEDIO DE PROTOTYPE");
String.prototype.agregaExclamacion = function(frase){
    if(this.length == 0){
        return this;
    }
    return `¡${this}!`
}
//let fRase = "Hola mundo";
let muestraCadena = "Hola Mundo";
console.log(muestraCadena.agregaExclamacion())
console.log("");

// EJERCICIO CREACIÓN DE JERARQUIA DE HERENCIA CON FUNCIONES CONSTRUCTORAS
function Persona(documento, nombre){
    this.documento = documento;
    this.nombre = nombre;
    this.mostrarDatos = function(){
        return `Documento ${documento} - Nombre ${nombre}`
    };
}
function Estudiante (documento, nombre, carnet, carrera){
    this.carnet = carnet;
    this.carrera = carrera;
    Persona.call(this, documento, nombre)
}
let newEstudiante = new Estudiante ("1234567890", "Andrés", 20220301, "Sistemas");
console.log(newEstudiante);
console.log(`Se puede mostrar el método que esta dentro de la función constructora padre ${newEstudiante.mostrarDatos()}`)
console.log("");

// EJERCICIO CREAR JERARQUIA DE HERENCIA CON FUNCIONES CONSTRUCTORAS USANDO CREATE()
console.log("CREAR JERARQUIA DE HERENCIA CON FUNCIONES CONSTRUCTORAS USANDO CREATE()")
function Libro(titulo, autor){
    this.obtenerTitulo = function () {
        return `Título: ${titulo}`;
    };
    this.obtenerAutor = function () {
        return `Autor: ${autor}`;
    };
}
function LibroLiteratura(titulo, autor, categoria){
    this.obtenerCategoria = function () {
        return `Categoría: ${categoria}`;
    };
    this.obtenerDatosCompletos = function () {
        return `Título: ${this.obtenerTitulo()} - Autor: ${this.obtenerAutor()} - Categoría: ${categoria}`;
    };
      Libro.apply(this, arguments);
}
LibroLiteratura.prototype = Object.create(Libro.prototype);
LibroLiteratura.prototype.constructor = LibroLiteratura;
let libro = new LibroLiteratura('¿Para qué sirve la filosofía?', 'Darío Sztajnszrajber', 'Filosofía');
console.log(libro.obtenerAutor());
console.log(libro.obtenerTitulo());
console.log(libro.obtenerCategoria());
console.log(libro.obtenerDatosCompletos());
