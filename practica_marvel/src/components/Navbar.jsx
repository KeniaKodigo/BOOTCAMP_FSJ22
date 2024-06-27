import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Comics from './Comics'
import Bienvenida from './Bienvenida'
import Error404 from './Error404'
import BuscarPersonaje from './BuscarPersonaje'

export default function Navbar() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/comics" className='link'>Comics</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Bienvenida />}/>
                <Route path='/comics' element={<Comics />}/>
                <Route path='*' element={<Error404 />}/>
                <Route path='/busqueda' element={<BuscarPersonaje />}/>
            </Routes>
        </BrowserRouter>
        
    )
}
