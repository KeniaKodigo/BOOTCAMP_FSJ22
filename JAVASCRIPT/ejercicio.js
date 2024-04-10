/**
 * variables y constantes
 * 
 * 
 * var = determina una variable de manera global
 * let = determina el acceso en bloque
 */

let cadena = "";
var cadena2 = "";
cadena2 = "kenia";

let variable; //undefined
let booleano = true; //booleano
let fecha_actual = new Date();
let nulo = null; //nulo

//let cadena = "kenia";
const PI = 3.1416;

function obtenerCadena(){
    var numero2;
    let numero1 = 7;
    cadena;

    numero1
    //////
}

//ARREGLOS Y OBJETOS

//Un arreglo es una coleccion de elementos ordenados (donde empezamos con el indice 0)
let arreglo_frutas = ["manzana","fresa","banana","uva"];
console.log(arreglo_frutas[2]);

//Objeto(clave-valor)
let persona = {
    nombre: "Kenia Paiz",
    telefono: 56785422,
    correo: "paiz@gmail.com",
    hobbies: ["ver anime","leer","jugar videojuegos"]
}
console.log(persona.telefono);

//nombre, direccion, nacionalidad, edad, correo
let alumnos_fsj22 = [
    {
        nombre : "Isaac Alexander Huezo",
        direccion: "San Salvador",
        nacionalidad: "Salvadoreño",
        correo: "isaac@gmail.com"
    },
    {
        nombre : "Cristian Vasquez",
        direccion: "Santa Tecla",
        nacionalidad: "Salvadoreño",
        correo: "cris@gmail.com"
    },
    {
        nombre : "Victor Villalta",
        direccion: "Chalatenango",
        nacionalidad: "Salvadoreño",
        correo: "vic@gmail.com"
    },
    {
        nombre : "Luis Alvarado",
        direccion: "San Salvador",
        nacionalidad: "Salvadoreño",
        correo: "luis@gmail.com"
    }
]
console.table(alumnos_fsj22[1]);
//bucles (estructuras de control)

/**
 * Las estructuras de control modifica el flujo de trabajo de tu aplicacion
 * 
 * Estructuras condicionales
 * if-else, if-else if-else, switch, operador ternario
 * Estructuras repetitivas (loop, bucles)
 * for, while, do while, foreach (js => for of, for in)
 */

//bucle (for, while, do while) 3 secciones (contador, hasta donde va llegar, incremento/decremento)
/**
 * length: verifica el tamaño del arreglo o cadena
 */
let cadena3 = "jhbjjdjjsjnjs";
console.log(alumnos_fsj22.length); //4
//[]
for(let contador = 0; contador < alumnos_fsj22.length; contador++){
    if(alumnos_fsj22[contador].direccion == "San Salvador"){
        console.table(alumnos_fsj22[contador])
    }
}


/**
 * JS (metodos para cadenas / metodos para arreglos)
 */
alumnos_fsj22.map(estudiante => {
    console.log(estudiante.nombre)
});
let arreglo_filtrado = alumnos_fsj22.filter(estudiante => estudiante.direccion != "San Salvador");
console.log(arreglo_filtrado);



