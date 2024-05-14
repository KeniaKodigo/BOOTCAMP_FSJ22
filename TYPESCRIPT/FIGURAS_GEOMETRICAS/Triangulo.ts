import { FigurasGeometricas } from "./Figuras";

class Triangulo extends FigurasGeometricas{
    base:number
    altura:number

    constructor(base:number, altura:number) {
        super()
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): void {
        let resultado = (this.base * this.altura) / 2;
        console.log(`El area del triangulo es ${resultado.toFixed(2)}`);
    }
}

let triangulo = new Triangulo(20, 34);
triangulo.calcularArea();