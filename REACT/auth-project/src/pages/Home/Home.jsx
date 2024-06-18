import { useContext } from "react"
import { UserContext } from "../../context/UserDataContext"
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

  const {data,setData} = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    setData(null);
    navigate('/login')
  }

  return (
    <>
        <h1>Holiwi amiwito</h1>
        {data ?  
        <> 
          <h1> {data.email}</h1> 
          <button onClick={logout}>Desloguearse</button>
        </> 
        : <Link to='/login'>Logueate pa</Link>}
    </>
  )
}
