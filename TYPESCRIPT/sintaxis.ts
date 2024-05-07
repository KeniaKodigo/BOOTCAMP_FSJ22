//Declaracion variables con tipado

let nombre: string; //indefinida
nombre = "Kenia";

//int, float o double
let numero: number = 10;
let decimal: number = 30.5;
let booleano: boolean = true;

//Declaracion de constantes
const PI: number = 3.1416;

//Asignamos una funcion y asignamos que tipo de dato va devolver
function sumar(num1:number, num2:number) :number{
    return num1 + num2;
}

console.log(sumar(10, 5)); //15

//cadena, entero
//Funciones genericas: Se puede devolver cualquier tipo de dato

function asignarValor<T>(valor: T) :T{
    return valor;
}
console.log(asignarValor("Hola estamos en typescript"));
console.log(asignarValor(125.50));

//Tipos de datos arreglos y objetos
let frutas: string[] = ["manzana","uvas","fresas","coco"];
frutas.push("mandarina")
let numeros: number[] = [1,2,3,4,5];
console.table(frutas)
//Tupla => arreglo (coleccion de datos) que puede devolver varios elementos con diferente tipo de dato y tiene una longitud fija
let tupla: [string, boolean, string, number] = ["Juan", true, "maria", 20.5]

for(let i = 0; i < tupla.length; i++){
    if(tupla[i] == "Juan"){
        console.log("Encontre a juan");
    }
}

console.table(tupla)

//Objetos
let persona1: object = {
    nombre: "Kenia",
    apellido: "Paiz",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"]
}

let persona2: object = {
    nombre: "Cristian",
    apellido: "Paiz",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"]
}

//Interfaces
interface Persona{
    //propiedades
    nombre: string;
    apellido: string;
    edad: number;
    hobbies: string[];
    email?: string; //atributo opcionales (?)
}

let objeto1: Persona = {
    nombre: "Kenia",
    apellido: "Paiz",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"],
    email: "paizkenia@gmail.com"
}

let objeto2: Persona = {
    nombre: "Cristian",
    apellido: "Alvarez",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"]
}

let objeto3: Persona = {
    nombre: "Luis",
    apellido: "Alvarez",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"],
    email: "luis@gmail.com"
}

let objeto4: Persona = {
    nombre: "Isaac",
    apellido: "Alvarez",
    edad: 25,
    hobbies: ["leer","ver anime","escuchar musica"]
}

// let objeto5: Persona = {}