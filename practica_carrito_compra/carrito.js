/** Asignacion de variables */
const carrito = document.getElementById('carrito');
//querySelector, querySelectorAll
const bodyCarrito = document.querySelector('#lista-carrito tbody');
const footerCarrito = document.querySelector('#lista-carrito tfoot');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const listadoCursos = document.getElementById('lista-cursos');
let arregloCarrito = [];

cargarEventos();

//declaro la funcion
function cargarEventos(){
    //haciendo llamados de las funciones que vamos hacer

    //llamar funcion agregarCurso, el evento estara atento en contenedor main
    listadoCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    //cancela la accion que esta predeterminada a un elemento
    e.preventDefault();

    //condicionamos que solo evalua las etiquetas html que contengan la clase button-carrito
    if(e.target.classList.contains('button-carrito')){
        //mandamos a llamar los elementos padre de la etiqueta que estamos seleccionando
        //console.log(e.target.parentElement.parentElement);

        const cursoSeleccionado = e.target.parentElement.parentElement;

        //modificamos el texto de la etiqueta
        e.target.innerText = 'Ir al carrito';
        //e.target.innerHTML = '<a href=""></a>';
        //agregamos una clase a la etiqueta para desabilitar el hipervinculo
        e.target.classList.add('disabled');

        //enviamos una alerta para el usuario
        Swal.fire({
            icon: 'success',
            title: 'Agregado correctamente',
            showConfirmButton: false,
            timer: 900
        })

        leerDatosCurso(cursoSeleccionado);
    }
}

//funcion para mandar la informacion del curso al arreglo
function leerDatosCurso(curso){
    console.log(curso);
    //convertimos la informacion del curso a un objeto
    const objetoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    //console.log(objetoCurso);

    //metodo para agregar elementos a un arreglo = push()
    arregloCarrito.push(objetoCurso);
    //arregloCarrito = [...arregloCarrito, objetoCurso];
    console.log(arregloCarrito);

    carritoHTML();
}

//funcion para iterar el arreglo en la tabla del carrito de compra
function carritoHTML(){
    //bucles => for, while, do while, foreach

    // for(let i=0; i < arregloCarrito.length; i++){

    // }

    //map()
    arregloCarrito.map(curso => {
        
        //tr => creamos una fila
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borra-curso" data-id=${curso.id}>Eliminar<a>
            </td>
        `;

        bodyCarrito.appendChild(fila);
    })
}


