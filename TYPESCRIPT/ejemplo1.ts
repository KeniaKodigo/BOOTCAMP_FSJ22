/**
 * Abstraccion: Extraemos lo mas relevante que se va trabajar en la clase
 * tsc nombre.ts
 * 
 * Encapsulamiento: Es el nivel de acceso para los atributos y metodos de una clase
 * 
 * metodos de acceso: public, private, protected
 * public: hay acceso total (dentro de la clase, fuera de clase, clase hija)
 * protected: 2 niveles de acceso (dentro de la clase, clases hijas)
 * privado: 1 nivel de acceso (dentro de la clase)
 */
class Producto{
    protected nombre:string
    protected descripcion:string
    protected categoria:string
    protected precio:number
    protected fecha_vencimiento:string
    private stock:number

    //constructor (inicializa el objeto)
    constructor(nombre:string, descripcion:string, categoria:string, precio:number, vencimiento:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.fecha_vencimiento = vencimiento;
        this.stock = 0;
    }

    /**
     * Cuando hay un atributo se utilizar los metodos setter y getter
     * 
     * set => capturar y modificar el valor del atributo privado (parametro)
     * get => retorna el valor del atributo privado
     */

    //capturamos y modificamos el valor
    setstock(cantidad:number){
        this.stock = cantidad;
    }

    //retornamos el valor
    getstock(){
        return this.stock;
    }

    /**
     * en base a la categoria calcular el descuento del producto:
     * - electrodomesticos 20%
     * - insumos (comida) 10%
     * - los demas no aplica descuento
     */
    calcularDescuento(){
        let descuento = 0;
        let precio_descuento = 0;
        //switch, if - elseif
        if(this.categoria == "electrodomesticos"){
            descuento = this.precio * 0.20;
            precio_descuento = this.precio - descuento;
            console.log(`El precio del producto ${this.nombre} es $${this.precio} y con descuento quedo en $${precio_descuento}`);

        }else if(this.categoria == "insumos"){
            descuento = this.precio * 0.10;
            precio_descuento = this.precio - descuento;
            console.log(`El precio del producto ${this.nombre} es $${this.precio} y con descuento quedo en $${precio_descuento}`);
        }else{
            console.log(`El precio del producto ${this.nombre} es $${this.precio} y no lleva descuento`);
        }
    }

    verificarExistencias(){

    }
}

let producto1 = new Producto("Licuadora","Color gris y negro","electrodomesticos",150,"");
producto1.setstock(25);
console.log(producto1);
console.log(producto1.getstock());
producto1.calcularDescuento();
//producto1.nombre