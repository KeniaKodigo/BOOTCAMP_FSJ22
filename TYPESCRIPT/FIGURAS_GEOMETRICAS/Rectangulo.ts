import { FigurasGeometricas } from "./Figuras";

class Rectangulo extends FigurasGeometricas{
    longitud:number
    ancho:number

    constructor(longitud:number, ancho:number) {
        super()
        this.longitud = longitud;
        this.ancho = ancho;
    }

    calcularArea(): void {
        let resultado = this.longitud * this.ancho;
        console.log(`El area del rectangulo es ${resultado.toFixed(2)}`);
    }
}

let rectangulo = new Rectangulo(23.5, 45.4);
rectangulo.calcularArea();