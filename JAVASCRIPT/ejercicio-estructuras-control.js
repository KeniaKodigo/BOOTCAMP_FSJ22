/**
 * Solicitar un número entero, determine y muestre si dicho número es negativo, positivo o cero.
 */

let arr = [1,2,3,4];
function verificarNumeros(numeros){
    // numero.forEach((nume) =>{
    //     if(nume >0){
    //         console.log("Positivo")
    //     }
    //     else if(nume <0){
    //         console.log("Negativo")
    //     }
    //     else{
    //         console.log("Numero Cero")
    //     }
    // })
    //for
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > 0){
            console.log("El numero es positivo " + numeros[i]);
        }else if(numeros[i] < 0){
            console.log("El numero es negativo" + numeros[i]);
        }else{
            console.log("El numero es cero");
        }
    }
}
let numero = [1,2,3,4,-10,4,0,-20];
//verificarNumeros(numero);
verificarNumeros(arr)


//funciones de flecha
const determinarNumero = (numeros) =>{
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > 0){
            console.log("El numero es positivo " + numeros[i]);
        }else if(numeros[i] < 0){
            console.log("El numero es negativo" + numeros[i]);
        }else{
            console.log("El numero es cero");
        }
    }
}

determinarNumero([23,-9,-40]);

/**
 * Verificar cuantos numeros pares e impares tiene el siguiente arreglo
 * [10,3,2,5,6,20,133,54,23] //9
 */

const verificarNumerosParesImpares = (array) => {
    let i = 0;
    let contador_par = 0;
    let contador_impar = 0;
    while(i < array.length){
        // if(array[i] % 2 === 0){
        //     //contar
        //     contador_par++;
        // }else{
        //     //contar impares
        //     contador_impar++;
        // }
        array[i] % 2 === 0 ? contador_par++ : contador_impar++;
        i++;
    }
    console.log("Total de numeros pares: " + contador_par);
    console.log("Total de numeros impares: " + contador_impar);
}

verificarNumerosParesImpares([10,3,2,5,6,20,133,54,23]);

/**
 * En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
 * - Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
 * - Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 * - Obtener cuantos alumnos reprobaron
 */

const obtenerEstadoAlumnos = (arreglo_notas) => {
    let contador = 0;
    let contador_aprobados = 0;
    let contador_recuperacion = 0;
    let contador_reprobado = 0;
    do{
        if(arreglo_notas[contador] >= 7){
            contador_aprobados++;
        }else if(arreglo_notas[contador] >= 5 && arreglo_notas[contador] < 7){
            contador_recuperacion++;
        }else{
            contador_reprobado++;
        } 

        contador++;
    }while(contador < arreglo_notas.length);

    console.log("Numero de estudiantes aprobados: " + contador_aprobados);
    console.log("Numero de estudiantes que estan en recuperacion: " + contador_recuperacion);
    console.log("Numero de estudiantes reprobados: " + contador_reprobado);
}

obtenerEstadoAlumnos([7,8,6.5,5,4,9,8.2]);

/**
 * Tabla de multiplicar (1 al 10)
 */

function tablaMultiplicar(numero){
    let resultado = 0;
    for(let i = 1; i <= 10; i++){
        resultado = numero * i;
        //console.log(numero + "*" + i + "=" + resultado);
        console.log(`${numero} * ${i} = ${resultado}`);
    }   
}

tablaMultiplicar(10);
console.log("\n");
tablaMultiplicar(20);