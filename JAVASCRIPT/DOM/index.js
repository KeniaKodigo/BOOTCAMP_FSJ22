console.log(document);

//API DE NAVEGACION

//acceder desde el id en el h1
let titulo = document.getElementById("titulo");

console.log(titulo.textContent);

//let titulo2 = document.querySelector('h1');

//accediendo por medio de una clase
let titulo2 = document.querySelector('p');

console.log(titulo2.textContent);

let lista_parrafos = document.querySelectorAll('.parrafo');

console.log(lista_parrafos)

//API DE MANIPULACION

//creando un elemento
let categoria = document.createElement('li');

let lista = document.getElementById('lista');

categoria.textContent = "Programacion";

lista.appendChild(categoria);
console.log(document);


function verificarClick(){
    alert("Le diste click :)");
}

function capturarNombre(){
    let nombre = document.querySelector('#nombre');
    alert("Saludos! " + nombre.value)
}

function obtenerLugarTuristico(){
    let opcion = document.querySelector('select');
    //let opcion = document.querySelector('input[type="text"]');
    console.log(opcion.value);
}