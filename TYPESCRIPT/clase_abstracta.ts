abstract class Product{
    protected nombre:string
    protected descripcion:string
    protected categoria:string
    protected precio:number
    private stock:number

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

    /**
     * Metodo abstracto que el comportamiento se lo asigna la clase hija
     */
    abstract imprimirDetalle() :void;

    abstract calcularDescuento() :void;
}


class Biberes extends Product{
    protected fecha_vencimiento:string
    protected lote:string

    constructor(nombre:string, descripcion:string, categoria:string, precio:number, vencimiento:string, lote:string) {
        //heredamos el constructor padre
        super(nombre, descripcion,categoria, precio);
        //asignamos los atributos faltantes
        this.fecha_vencimiento = vencimiento;
        this.lote = lote;
    }

    imprimirDetalle(): void {
        //le asignamos un comportamiento
        console.log(`Detalle del producto\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoria: ${this.categoria}\nPrecio: $${this.precio}\nFecha de vencimiento: ${this.fecha_vencimiento}\nLote: ${this.lote}\n`);
    }

    calcularDescuento(): void {
        let descuento = 0;
        let precio_descuento = 0;
        
        descuento = this.precio * 0.10;
        precio_descuento = this.precio - descuento;
        console.log(`El precio del producto ${this.nombre} es $${this.precio} y con descuento quedo en $${precio_descuento}`);
    }
}

class ProductsDomesticos extends Product{
    protected marca:string


    constructor(nombre:string, descripcion:string, categoria:string, precio:number, marca:string) {
        //heredamos el constructor padre
        super(nombre, descripcion,categoria, precio);
        //asignamos los atributos faltantes
        this.marca = marca;
    }

    imprimirDetalle(): void {
        //le asignamos un comportamiento
        console.log(`Detalle del producto\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoria: ${this.categoria}\nPrecio: $${this.precio}\nMarca: ${this.marca}\n`);
    }

    calcularDescuento(): void {
        let descuento = 0;
        let precio_descuento = 0;
        
        descuento = this.precio * 0.20;
        precio_descuento = this.precio - descuento;
        console.log(`El precio del producto ${this.nombre} es $${this.precio} y con descuento quedo en $${precio_descuento}`);
    }
}

// //instanciar
// let objeto1 = new Product("computadora asus","color azul y 8gb de ram","tecnologia",1400);