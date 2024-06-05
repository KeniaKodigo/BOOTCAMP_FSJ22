import './App.css'
import {Home}  from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Register } from './pages/Register/Register'

function App() {

  return (
    <>
    {/*Iniciamos React Router Dom en nuestra app */}
    <BrowserRouter>
     {/*Creamos las rutas de nuestra app*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
