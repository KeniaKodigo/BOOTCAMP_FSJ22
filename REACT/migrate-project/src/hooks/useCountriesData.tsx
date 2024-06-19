import { useState,useEffect } from "react";

interface ICountry{ 
        name:{common: ""},
        flags:{svg: ""},
        region:""
}

const APIuri = "https://restcountries.com/v3.1/all";

export const useCountriesData = (region :string) => {
    const [countries,setCountries] = useState([])

    const fetchCountries = async () => {
        let response = await fetch(APIuri)
        let data = await response.json()
        let filteredCountries = data;
        if(region != ""){
            filteredCountries = data.filter((country:ICountry) => country.region === region )
        }
        setCountries(filteredCountries); 
    }

        //Cargamos los 250 paises al montar el componente
        useEffect(()=>{
            fetchCountries();
            //console.log(countries);
            
        },[region] )
    
  return countries
}
