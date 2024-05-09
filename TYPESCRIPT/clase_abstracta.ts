
abstract class Products{
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

    //metodo abstracto
    //Devuelve un resultado con cualquier tipo de dato (void)
    abstract imprimirDetalle() : void;
}

//La clase hija esta obligada a heredar el metodo abstracto
class Insumos2 extends Products{
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

let azucar2 = new Insumos2("Azucar", "azucar morena de 5 libras","insumos",5,"12-07-2025","prueba lote");
azucar2.imprimirDetalle();