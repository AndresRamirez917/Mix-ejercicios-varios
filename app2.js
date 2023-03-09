// EJERCICIO AGREGAR PROPIEDADES A UN OBJETO POR MEDIO DE OBJECTDEFINEPROPERTY()
console.log("AGREGAR PROPIEDADES A UN OBJETO POR MEDIO DE OBJECTDEFINEPROPERTY()")
let PErson  = {};
Object.defineProperty(PErson, "id", {value: 1, writable: false, enumerable: true});
console.log(PErson.id);
PErson.id=2;
console.log(PErson.id)
Object.defineProperty(PErson, "nombre", {value: "andres", writable: true, enumerable: true})
console.log(PErson.nombre);
PErson.nombre = "Carolina";
console.log(PErson.nombre)
for(let p in PErson){
    console.log(PErson)
}
console.log("")

// EJERCICIO PREVERNIR LA EXTENSIÓN DE UN OBJETO USANDO OBJECTPREVENTEXTENSION()
"use strict"
console.log(" PREVERNIR LA EXTENSIÓN DE UN OBJETO USANDO OBJECTPREVENTEXTENSION()")
let People = {
    nombre: "Andres",
    mostrarNombre : function() {
        console.log(`Nombre ${this.nombre}`)
    }
}
People.mostrarNombre()
console.log(Object.isExtensible(People))


try {
    Object.preventExtensions(People)
    console.log("Al querer usar la propiedad .isExtensible debajo de preventExtension el valor sera " + Object.isExtensible(People))
    People.apellido = "Ramirez"
} catch (e) {
    console.log(`Error: ${e}`)
}
console.log(People)
console.log("")

// EJERCICIO PREVENIR CUALQUIER CAMBIO EN UN OBJETO CON OBJECT.FREEZE()
console.log("PREVENIR CUALQUIER CAMBIO EN UN OBJETO CON OBJECT.FREEZE()")
"use strict"
let Car = {
    nombre: "Mercedez Benz",
    mostrarNombre: function(){
        console.log(`Nombre ${this.nombre}`)
    }
}

console.log(Car);
Car.mostrarNombre();

try {
    Object.freeze(Car)
    Car.nombre = "Renault"
} catch (e) {
    console.log(`Error ${e}`)
}
console.log(Car);
Car.mostrarNombre();
console.log("");

// EJERCICIO USO BÁSICO DEL MÉTODO BIND PARA ASOCIAR UN CONTEXTO A UNA FUNCIÓN
console.log("USO BÁSICO DEL MÉTODO BIND PARA ASOCIAR UN CONTEXTO A UNA FUNCIÓN");
let fruta = {
    nombre: "manzana",
    mostrarNombre : function(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

let obtenerNombre = fruta.mostrarNombre;
console.log("Esto muestra Nombre: undefined")
obtenerNombre()

let obtenerNombre2 = obtenerNombre.bind(fruta);
console.log("Esto muestra Nombre: manzana")
obtenerNombre2()
console.log("")

// EJERCICIO 1 CREAR UN TEMPORIZADOR CON EL USO DE SETTIMEOUT() Y BIND()
function Temporizador(tagId, inicio, final){
this.tagId = tagId;
this.inicio = inicio;
this.final = final;
this.contador = this.inicio;

this.conteoSegundos = function  (){
    if(this.contador == this.final){
        this.conteoSegundos =  null;
        return;
    }
    document.getElementById("conteo").innerHTML = this.contador--;
    setTimeout(this.conteoSegundos.bind(this), 1000);
}
}
let temporizador = new Temporizador("conteo", 20, 0);
temporizador.conteoSegundos()
console.log("")

// EJERCICIO 2 OBTENER EL ELEMENTO PADRE DE UN ELEMENTO HIJO USANDO PARENTNODE
console.log("OBTENER EL ELEMENTO PADRE DE UN ELEMENTO HIJO USANDO PARENTNODE")
let hijo = document.getElementById("hijo");
let result = document.getElementById("rEsultado");
let result2 = document.getElementById("rEsultado2");
result.innerText = hijo.innerText
console.log(`Esto muestra el mensaje que tiene la etiqueta hija <p> que es: ${result.innerText}`)
let padre = hijo.parentNode;
result.innerText = padre.nodeName
console.log(`Esto muestra el nombre del nodo que contiene a los nodos hijos ${padre.nodeName}`)
result2.innerText = padre.id
console.log(`Esto muestra el nombre del id que tiene el nodo padre en el archivo html ${padre.id}`)
console.log("")

// EJERCICIO 3 OBTENER EL NÚMERO DE ELEMENTOS HIJO DE UN ELEMENTO CON LA PROPIEDAD CHILDNODES
console.log("OBTENER EL NÚMERO DE ELEMENTOS HIJO DE UN ELEMENTO CON LA PROPIEDAD CHILDNODES");
let papa = document.getElementById("papa");
let Resul = document.getElementById("result");
let hijos = padre.childNodes;
console.log(`El número de nodos hijos que están dentro de nodo padre es ${hijos.length}`)
Resul.innerText = hijos.length
