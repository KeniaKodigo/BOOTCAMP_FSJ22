//PROGRAMACION ORIENTADA A OBJETOS

/** 
 * Clase: Plantilla donde describimos atributos y metodos para nuestros objetos
 * 
 * atributos: son caracteristicas del objeto
 * 
 * metodos: acciones del objeto
 */

function saludar() :string{
    return "Hola"
}

class Vehiculo{
    //marca, modelo, color, anio
    marca:string;
    modelo:string;
    color:string;
    anio:number;

    /**
     * constructor: es un metodo predefinido de la clase, sirve para inicializar un objeto
     */
    //utilizando el constructor con un objeto estatico
    // constructor() {
    //     this.marca = "Toyota";
    //     this.modelo = "toyota modelo";
    //     this.color = "gris";
    //     this.anio = 2010;
    // }

    //constructor donde el objeto que se inicialize sea del usuario

    //variable vs atributo
    constructor(param_marca:string, modelo:string, color:string, anio:number){
        /**
         * this -> hace referencia a los atributos y metodos de la clase
         */
        this.marca = param_marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
    }

    encender() :string{
        return "Estoy enciendo el vehiculo";
    }

    apagar() :string{
        return "Estoy apagando el vehiculo";
    }

    acelerar() :string{
        return saludar();
        //return this.apagar()
    }
}

//Instanciar una clase (crear un objeto de una clase)
let vehiculo1 = new Vehiculo("Honda","prueba toyota","Verde",2018);
console.log(vehiculo1);

// vehiculo1.marca = "Toyota";
// vehiculo1.modelo = "prueba toyota";
// vehiculo1.color = "Verde";
// vehiculo1.anio = 2018;
console.log(vehiculo1.acelerar());

let vehiculo2 = new Vehiculo("jsj","jkjkd","ksks",2013);
// vehiculo2.marca = "Hunda";
// vehiculo2.color = "Negro";
// vehiculo2.anio = 2004;
// console.log(vehiculo2.acelerar());
// console.log(vehiculo2);

