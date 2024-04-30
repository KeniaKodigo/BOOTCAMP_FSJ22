// fetch('https://rickandmortyapi.com/api/character/')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('No se pudo obtener la respuesta del servidor');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Datos obtenidos:', data);
//   })
//   .catch(error => {
//     console.error('Error al obtener los datos:', error);
// });

//status 500 => 
//status 200 =>


//PETICIONES ASINCRONAS -> PROMESAS EN JS
/**
 * promesas => es un objeto que recibe un objeto y este evalua si la promesa esta vacia o no
 */

const seccion = document.querySelector('#seccion-personajes');

//funcion para validar con emoji el estado del personaje
const verificarEmoji = (status) => {
    switch(status) {
        case 'Alive':
            return '❤️';
        
        case 'Dead':
            return '☠️';

        default:
            return '❓'
    }
}

//funcion va trabajar en segundo plano (asincrona)
const getPersonajes = async () => {

    //try - catch(manejo de error)
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        //la informacion de los personajes lo mandamos en formato json
        const datos_personajes = await response.json();

        console.log(datos_personajes.results);
        //Guardamos el arreglo de personajes en una variable
        let array_personajes = datos_personajes.results;
        //for, foreach, while, map()

        array_personajes.map((personaje) => {
            // console.log(`Personaje: ${personaje.name}`);
            // console.log(`Genero: ${personaje.gender}`);
            // console.log(`Localidad: ${personaje.location.name}`);
            // console.log(`Episodio 1: ${personaje.episode[0]}`);

            //const [name, location, gender] = array_personajes
            //Crear un div
            const card = document.createElement('div');
            //agregar las clases
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML += `
                <div class="card">
                    <img src=${personaje.image} class="img-fluid" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                        <strong>Localidad: </strong>${personaje.location.name}<br>
                        <strong>Genero: </strong>${personaje.gender}<br>
                        <strong>Especie: </strong>${personaje.species}<br>
                        <strong>Estado: </strong>${verificarEmoji(personaje.status)}<br>
                    </p>
                </div>
            `;

            seccion.appendChild(card)
        })

    }catch(error){
        console.error(`Error: ${error}`)
    }
}

getPersonajes();