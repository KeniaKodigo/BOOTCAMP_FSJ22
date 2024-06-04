
export const CardCountry = ({country}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={country.flags.svg} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  )
}
