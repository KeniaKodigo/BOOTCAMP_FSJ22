const verificarNumerosParesImpares = (array) => {
    let contador_par = 0;
    let contador_impar = 0;
    array.map(numero => {
        return numero % 2 === 0 ? contador_par++ : contador_impar++;
        //console.log(numero)
    })
    console.log("Total de numeros pares: " + contador_par);
    console.log("Total de numeros impares: " + contador_impar);
}
verificarNumerosParesImpares([10,3,2,5,6,20,133,54,23]);

//solucion 1
const verificarNumerosParesImparesV2 = (array) => {
    let array_par = [];
    let array_impar = [];
    array.map(numero => {
        return numero % 2 === 0 ? array_par.push(numero) : array_impar.push(numero);
    })

    console.table(array_impar);
}

//solucion 2 => utilizando metodo filter
const verificarNumerosParesImparesV3 = (array) => {
    //un nuevo arreglo
    let array_par = array.filter(num => {
        return num % 2 === 0
    });

    let array_impar = array.filter(num => {
        return num % 2 !== 0
    });

    console.table(array_impar);
}

//map() => iterar los elementos del arreglo
//push() => agregar elementos a un arreglo (agrega al final)


//arreglo numeros pares = [10,2,6,10,54]
//arreglo numeros impares = [3,5,133,23]


let frutas = ['🍎', '🍐', '🍌'];
console.log(frutas);
frutas.push('🍊','🥥','🍉');
console.log(frutas);
console.log("/**********************************************/\n");
//unshift => agrega los elementos al principio del arreglo
let frutas2 = ['🍎', '🍐', '🍌'];
console.log(frutas2);
frutas2.unshift('🍊','🥥','🍉');
console.log(frutas2);

//pop = eliminar elementos al final del arreglo
frutas2.pop();
console.log(frutas2);

//shift = elimina el primer elemento del arreglo
frutas2.shift();
console.log(frutas2);
//[20, 6, 4, 10, 12..]
/**
 * arreglos (arreglos de objetos)
 * JSON 
 */

//map(), filter()
verificarNumerosParesImparesV3([10,3,2,5,6,20,133,54,23]);

function encontrarPersonas(){
    let personas = [
        { nombre: 'Isaac', edad: 16 },
        { nombre: 'Cristian', edad: 18 },
        { nombre: 'Edgar', edad: 15 },
        { nombre: 'Juan', edad: 30 },
        { nombre: 'María', edad: 25 },
        { nombre: 'Pedro', edad: 35 }
    ];

    //[10,20,23]
    //filter
    //Devolver en un nuevo arreglo las personas que soy mayores de 20 anios
    const devolverArray = personas.filter((persona) => {
        return persona.edad >= 18
    }); 

    const devolverArrayFind = personas.find((item) => {
        return item.edad >= 18
    }); 

    console.log(devolverArray);
}
encontrarPersonas();

//find() => encuentra las coincidencias de un arreglo, (SOLO DEVUELVE EL PRIMER ELEMENTO QUE ENCUENTRA)
let frutas_include = ['🍎', '🍐', '🍌','🍌','🍌'];

//include => DEVUELVE TRUE/FALSE si el elemento esta incluido en el arreglo
console.log(frutas_include.includes('🍌')); //true

//some & every
let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

//verificar si TODAS las personas pueden votar (true/false)
let respuesta = personas.every((persona) => persona.edad >= 18); 
//false porque un elemento o mas no cumple la condicion
//true cuando todos los elementos cumplan con la condicion
console.log("/***********************************************/")
console.log(respuesta)

//some => devuelve true si por lo menos un elemento cumple la condicion
let respuesta2 = personas.some((persona) => persona.edad >= 18); 
console.log("/***********************************************/")
console.log(respuesta2)



