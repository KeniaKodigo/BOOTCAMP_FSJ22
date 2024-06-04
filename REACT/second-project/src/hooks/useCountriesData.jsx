import { useEffect,useState } from "react"

const APIuri = "https://restcountries.com/v3.1/all"

export const useCountriesData = (region) => {
    //Estado para guardar y consultar los paises. 
    //Countries ->  consultar los paises
    //setCountries -> guardar o cambiar los paises
    const [countries,setCountries] = useState([
        {
            name:{common: ""},
            flags:{svg: ""},
            region:""
        }
    ]) //useState(ACA VA EL VALOR INICIAL)

//Funcion para pedir datos a la API
    const fetchCountries = async () => {
        
            let response = await fetch(APIuri)
            let data = await response.json()
            let filteredCountries = data;
            if(region != ""){
                filteredCountries = data.filter((country) => country.region === region )
            }
            setCountries(filteredCountries); //Guardamos los datos dentro del estado
        }
    
    //Cargamos los 250 paises al montar el componente
     useEffect(()=>{
        fetchCountries();
        //console.log(countries);
        
    },[region] )

  return countries
}
