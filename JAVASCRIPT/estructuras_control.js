/** condicionales */

function mayorEdad(edad){
    if(edad >= 18){
        alert("Sos mayor de edad");
    }else{
        alert("Sos menor de edad");
    }

    //operador ternario
    //edad >= 18 ? alert("Sos mayor de edad") : alert("Sos menor de edad");
}

//mayorEdad(10); //Sos menor de edad
//mayorEdad(20); //Sos mayor de edad

//if-else if-else
function tienda_cafe(cantidad_cafe){
    if(cantidad_cafe >= 5 && cantidad_cafe < 10){
        alert("Tenes un descuento del 10%");
    }else if(cantidad_cafe >= 10 && cantidad_cafe < 20){
        alert("Tenes un descuento del 20%");
    }else if(cantidad_cafe >= 20){
        alert("Tenes un descuento del 40%");
    }else{
        alert("No aplica descuento");
    }
}
//tienda_cafe(30);

//switch (en base a una forma de pago aplicar un descuento)
function verificarFormaPago(forma_pago){
    switch(forma_pago){
        case "paypall":
            alert("Elegiste paypall");
            break;

        case "efectivo":
            alert("Elegiste efectivo");
            break;

        case "Tarjeta":
            alert("Elegiste tarjeta");
            break;

        default:
            alert("Elige una forma de pagar");
    }
}

//verificarFormaPago("efectivo");

/** bucles */

//for, while, do while (numeros, cadenas, arreglos) , foreach(arreglos)
// for(let contador = 1; contador <= 10; contador++){
//     document.write(contador + "<br>");
// }

let cadena = "Hola Mundo!";
// for(let contador2 = 0; contador2 < cadena.length; contador2++){
//     document.write(cadena[contador2] + "<br>");
// }

//Iterar la cadena al reves "Hola Mundo!"
for(let contador2 = cadena.length - 1; contador2 >= 0; contador2--){
    document.write(cadena[contador2] + "<br>");
}


let contador3 = 0;
while(contador3 < cadena.length){
    //proceso
    console.log(cadena[contador3]);

    contador3++;
}

//do while siempre se cumple la primera vez
let contador4 = 0;
do{
    console.log(cadena[contador4]);
    contador4++;
}while(contador4 < cadena.length)

let arreglo = [1,2,3,4,5];

arreglo.forEach(numero => {
    console.log(numero)
})
