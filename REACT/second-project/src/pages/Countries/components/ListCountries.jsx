import { CardCountry } from "./CardCountry"

export const ListCountries = ({countries}) => {
  return (
    <>
    <div className="row">
      {countries.map((country, i) => (
        <div key={i} className="col-md-6 col-sm-12 col-lg-4 g-2 ">
          <CardCountry country={country} />
        </div>
      ))}
    </div>
    </>
  )
}
