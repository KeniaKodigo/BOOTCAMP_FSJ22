import axios from 'axios'
import React, { useState } from 'react'

export default function BuscarPersonaje() {

    //estado que guarde la informacion del personaje
    const [personaje, setPersonaje] = useState([])

    //estado que guarde el nombre del personaje
    const [name, setName] = useState("")

    //estado que controle si la persona esta haciendo una busqueda
    const [busqueda, setBusqueda] = useState(false)

    //metodo que verifica en la api el nombre del personaje y su informacion
    const getPersonajeByName = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`).then((response) => {
            setPersonaje(response.data.data.results)
            setBusqueda(true)
        }).catch((error) => {
            console.log("Error: "+error);
        })
    }

    //realizamos el evento donde se capture lo que la persona ingresa
    const handleName = (e) => {
        //console.log(e.target.value);
        setName(e.target.value);
    } 
    
    const buscarPersonaje = () => {
        getPersonajeByName()
    }

    console.log(personaje);
    return (
        <div>
            <div className='container mb-5'>
                <h1 className='text-center pt-4'>Encuentra tu personaje favorito!</h1>

                <label htmlFor="">Ingresa el nombre del personaje</label>
                <input type="text" className='form-control' onChange={handleName}/>
                <button className='btn btn-success mt-3' onClick={buscarPersonaje}>Ver Personaje</button>
                <br></br>

                {/** validando la informacion del personaje */}
                {
                    personaje.length !== 0 ? (
                        personaje.map((item, indice) => {
                            return(
                                <div className='p-4'>
                                    <h2 className='text-center'>{item.name}</h2>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" className='img-fluid' />
                                        </div>
                                        <div className='col-md-8 mt-4 px-5'>
                                            <h3>Lista de Comics</h3>
                                            <ol>
                                                {
                                                    item.comics.items.map((comic) => {
                                                        return (
                                                            <li>{comic.name}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    ) : (
                        //Si la busqueda es verdadera va validar si el personaje esta vacio mandara la alerta
                        busqueda && (
                            <div class="alert alert-danger mt-4" role="alert">
                                No se encontraron coincidencias
                            </div>
                        )
                        // name.length != 0 ?
                        //     <div class="alert alert-danger mt-4" role="alert">
                        //         No se encontraron coincidencias
                        //     </div>
                        // : ""
                    )

                }
            </div>
        </div>
    )
}
