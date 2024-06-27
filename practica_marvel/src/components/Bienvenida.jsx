import React from 'react'
import Events from './Events'
import { Link } from 'react-router-dom'

export default function Bienvenida() {
    return (
        <div className='bg-dark text-white'>
            <section className='container py-5'>
                <h1 className='text-center fst-italic'>Bienvenido a la API De MARVEL</h1>
                <div className='row'>
                    <div className='col-md-8 mt-4'>
                        <h2>Los mejores personajes de marvel</h2>
                        <h3>Disfruta el mejor contenido</h3>
                        <Link to="/busqueda" className='btn btn-primary'>Busca tu personaje favorito</Link>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://res.cloudinary.com/dmddi5ncx/image/upload/v1719432278/practicas/marvel/marvel_ngdvu1.png" alt="" className='img-fluid'/>
                    </div>
                </div>
            </section>
            <Events />
        </div>
    )
}
