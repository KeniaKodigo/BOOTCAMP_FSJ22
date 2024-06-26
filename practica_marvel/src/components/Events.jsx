import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Events() {
    //manejamos un estado para los eventos
    /**
     * eventos = guardar y leer el estado
     * setEventos = actualiza el estado
     */
    const [eventos, setEventos] = useState([])

    //funcion para obtener los eventos de la api
    const getEventos = () => {
        //utilizamos axios para traer la informacion de los eventos validando si va ver respuesta o error
        axios.get("https://gateway.marvel.com/v1/public/events?ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f").then((response) => {
            setEventos(response.data.data.results)
            //console.log(response.data.data.results);
        }).catch((error) => {
            console.log("Error: "+error);
        })
    }

    console.log(eventos);
    //useEffect
    useEffect(() => {
        //ejecutamos la funcion para renderizarla en el componente
        getEventos()
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Lista de Eventos</h1>
            <div className='row'>
                {
                    //iteramos el estado para la lista de los eventos
                    eventos.map((item, indice) => {
                        return(
                            <div className='col-md-4 mt-4'>
                                <div className='card'>
                                    <h5 className='card-header'>{item.title}</h5>
                                    <div className='card-body'>
                                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" className='img-fluid' />
                                        <p>ID del evento: {item.id}</p>
                                        <a href={item.urls[0].url}>Ver mas detalles</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
