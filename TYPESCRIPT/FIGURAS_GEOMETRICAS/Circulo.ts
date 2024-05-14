import { FigurasGeometricas } from "./Figuras";

class Circulo extends FigurasGeometricas{
    protected radio:number

    constructor(radio:number) {
        super();
        this.radio = radio
    }

    calcularArea(): void {
        //formula:  PI * r(2)
        //23.4555555555555555 => 23.455
        let resultado = Math.PI * Math.pow(this.radio, 2);
        console.log("El area del circulo es: "+ resultado.toFixed(2));
        
    }

}

let circulo = new Circulo(25);
circulo.calcularArea()