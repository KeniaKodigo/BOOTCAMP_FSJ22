import { useEffect, useState } from "react"
import { ListCountries } from "./components/ListCountries"

const APIuri = "https://restcountries.com/v3.1/all"

export const Countries = () => {
    //Estado para guardar y consultar los paises. 
    //Countries ->  consultar los paises
    //setCountries -> guardar o cambiar los paises
    const [countries,setCountries] = useState([
        {
            name:{common: ""},
            flags:{svg: ""}
        }
    ]) //useState(ACA VA EL VALOR INICIAL)

    //Funcion para pedir datos a la API
    const fetchCountries = async () => {

        let response = await fetch(APIuri)
        let data = await response.json()
        //console.log(data);
        
        setCountries(data); //Guardamos los datos dentro del estado
    }
    
    //Cargamos los 250 paises al montar el componente
    useEffect(()=>{
        fetchCountries();
        //console.log(countries);
        
    },[] )

  return (
    <div className="container">
    <h1 className="text-white">Countries</h1> 
    { //Renderizado condicional
    countries.length > 0 ?    
        <ListCountries countries={countries}/>
    : 
    <h1 className="text-white">Loading</h1>
    }
    </div>
  )
}
