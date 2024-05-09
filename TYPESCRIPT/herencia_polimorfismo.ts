class Productos{
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

    imprimirDetalle(){
        console.log(`Detalle del producto\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoria: ${this.categoria}\nPrecio: $${this.precio}`);
    }
}

//Clases hijas
class Insumos extends Productos{
    protected fecha_vencimiento:string
    protected lote:string

    constructor(nombre:string, descripcion:string, categoria:string, precio:number, vencimiento:string, lote:string) {
        //heredamos el constructor padre
        super(nombre, descripcion,categoria, precio);
        //asignamos los atributos faltantes
        this.fecha_vencimiento = vencimiento;
        this.lote = lote;
    }
    
    //heredamos el metodo y cambiamos su comportamiento
    imprimirDetalle(){
        console.log(`Detalle del producto\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoria: ${this.categoria}\nPrecio: $${this.precio}\nFecha de vencimiento: ${this.fecha_vencimiento}\nLote: ${this.lote}\n`);
    }
}

class Electrodomesticos extends Productos{
    protected marca:string


    constructor(nombre:string, descripcion:string, categoria:string, precio:number, marca:string) {
        //heredamos el constructor padre
        super(nombre, descripcion,categoria, precio);
        //asignamos los atributos faltantes
        this.marca = marca;
    }
    
    //heredamos el metodo y cambiamos su comportamiento
    imprimirDetalle(){
        console.log(`Detalle del producto\nNombre: ${this.nombre}\nDescripcion: ${this.descripcion}\nCategoria: ${this.categoria}\nPrecio: $${this.precio}\nMarca: ${this.marca}\n`);
    }
}

let azucar = new Insumos("Azucar", "azucar morena de 5 libras","insumos",5,"12-07-2025","prueba lote");
azucar.imprimirDetalle();

let licuadora = new Electrodomesticos("Licuadora","Color gris y negro","electrodomesticos",150,"Ninja");
licuadora.imprimirDetalle();