import { CardCountry } from "./CardCountry"

export const ListCountries = ({countries}) => {
  return (
    <>
    {
        countries.map((country,i) => {
            return (
                <div key={i}>   
                    <CardCountry country={country}/>
                </div>
            )
        })
    }
    </>
  )
}
