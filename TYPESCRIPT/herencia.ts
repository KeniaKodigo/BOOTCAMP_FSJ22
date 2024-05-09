class Producto {
    protected nombre:string
    protected descripcion:string
    protected categoria:string
    protected precio:number
    private stock:number

    //constructor (inicializa el objeto)
    constructor(nombre:string, descripcion:string, categoria:string, precio:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = 0;
    }

    //capturamos y modificamos el valor
    setstock(cantidad:number){
        this.stock = cantidad;
    }

    //retornamos el valor
    getstock(){
        return this.stock;
    }

    imprimirProducto() {
        return `Detalle del producto:\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoría: ${this.categoria}\nPrecio: ${this.precio}\nStock: ${this.stock}`;
    }

    calcularPrecio() {
        return this.precio;
    }
}

class Alimento extends Producto {
    protected fechaVencimeinto: string;
    protected lote: string;

    constructor(vencimiento: string, lote: string, nombre:string, descripcion:string, categoria:string, precio:number) {
        super(nombre, descripcion, categoria, precio);
        this.fechaVencimeinto = vencimiento; 
        this.lote = lote;
    }

    imprimirAlimento() {
        let mensaje: string;
        mensaje = super.imprimirProducto();
        return mensaje + `\nVencimiento: ${this.fechaVencimeinto}\nLote: ${this.lote}`;
    }

    calcularPrecio(){
        return this.precio * 1.13;
    }
}


class Electrodomestico extends Producto{
    protected modelo: string;
    
    constructor(modelo: string, nombre:string, descripcion:string, categoria:string, precio:number) {
        super(nombre, descripcion, categoria, precio);
        this.modelo = modelo;
    }

    calcularPrecio() {
        return this.precio * 0.90;
    }
} 


let azucar = new Alimento("2026-05-10", "L-352", "Azucar morena", "Bolsa de 5lb", "Insumos", 5);
//console.log(azucar.imprimirAlimento());
console.log(azucar.calcularPrecio());


let licuadora = new Electrodomestico("Oster 2024", "Licuadora", "Motor de 800W", "Electrodomestico", 100);
console.log(licuadora.calcularPrecio());