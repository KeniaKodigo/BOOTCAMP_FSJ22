
//Creacion de componente funcional

import { useState } from "react";
import { SecondComponent as Saludito } from "./SecondComponent"

 const FirstComponent = () => {
    //Creacion de Estado -> Hook useState
    const [nombreEstado, cambiarEstado] = useState("Victor")

    const cambioDeNombre = () => {
        if(nombreEstado == "Victor"){
            cambiarEstado("Goku");
        }else{
            cambiarEstado("Victor");
        }
    }

    return(
      <>    
        <h1>Soy el primer componente</h1>
        <Saludito nombre={nombreEstado} edad="26" genero="Masculino"/>
        <button onClick={() => cambioDeNombre()}>Apretame mee mee </button>
      </>
    )
}
export default FirstComponent
