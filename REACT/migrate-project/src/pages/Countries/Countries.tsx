import { useState } from "react"

export const Countries = () => {
    const [region,setRegion] = useState<string>("")

  return (
    <div className="container">
            <h1 className="text-white text-center">Countries</h1>

            <label className="form-label text-white"> Filter by Region: 
    <select onChange={(e)=> setRegion(e.target.value)}>
        <option value="">All</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
    </label>
    </div>
  )
}
