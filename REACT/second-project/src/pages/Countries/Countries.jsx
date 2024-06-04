import { useEffect, useState } from "react"
import { ListCountries } from "./components/ListCountries"
import { useCountriesData } from "../../hooks/useCountriesData";

export const Countries = () => {
    
    const [region,setRegion] = useState("");

    let countries = useCountriesData(region)

  return (
    <div className="container">
    <h1 className="text-white">Countries</h1> 
    
    <label className="form-label text-white"> Filter by Region: 
    <select onChange={(e) => setRegion(e.target.value)}>
        <option value="">All</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
    </label>

    <div className="container-fluid">
    { //Renderizado condicional
    countries.length > 1 ?    
        <ListCountries countries={countries}/>
    : 
    <h1 className="text-white">Loading</h1>
    }
    </div>
    </div>
  )
}
