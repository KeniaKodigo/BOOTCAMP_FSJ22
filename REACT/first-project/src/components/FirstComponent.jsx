
//Creacion de componente funcional

import { useState } from "react";
import { SecondComponent as Saludito } from "./SecondComponent"

 const FirstComponent = () => {
    //Creacion de Estado -> Hook useState
    const [person, setPerson] = useState({
      nombre: "Jairo",
      edad: 26,
      genero: "Masculino",
      dui:"1234567-8"
    })

    const cambioDeNombre = () => {
        if(person.nombre == "Jairo"){
            //setPerson({nombre:"Goku"});
            setPerson({...person,nombre: "Goku"})
        }else{
            setPerson({...person,nombre: "Jairo"})
        }
    }

    return(
      <>    
        <h1>Soy el primer componente</h1>
        {/*<Saludito nombre={person.nombre} edad={person.edad} genero={person.genero}/>*/}
        <Saludito usuario={person}/>
        <button onClick={() => cambioDeNombre()}>Apretame mee mee </button>
      </>
    )
}
export default FirstComponent
