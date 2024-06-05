import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <h1>Bienvenido amiwito</h1>
        <Link to='/login' className="btn btn-primary">Iniciar sesion</Link>
    </div>
  )
}
