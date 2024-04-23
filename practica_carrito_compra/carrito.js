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

    //llamamos al evento de escucha para que este atento al contenedor de la tabla del carrito de compra
    carrito.addEventListener('click', eliminarCurso);
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
    //ejecutamos la funcion para eliminar los duplicados de los cursos
    limpiarCarritoBody(bodyCarrito);
    let total = 0;
    arregloCarrito.map(curso => {
        
        let formatear_precio = parseInt(curso.precio.slice(1));
        console.log(formatear_precio);
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

        total += formatear_precio;
    })

    limpiarCarritoBody(footerCarrito);
    const fila_total_foot = document.createElement('tr');
    fila_total_foot.innerHTML = `
            <td colspan="3">Total a pagar</td>
            <td>$${total}</td>
    `;
    footerCarrito.appendChild(fila_total_foot)
}

//funcion para eliminar los hijos duplicados del (tbody) y (tfoot)
function limpiarCarritoBody(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

// function limpiarCarritoFoot(){
//     while(footerCarrito.firstChild){
//         footerCarrito.removeChild(footerCarrito.firstChild);
//     }
// }


//metodo para eliminar un curso por su Id
function eliminarCurso(e){
    if(e.target.classList.contains('borra-curso')){
        //imprimir el id 
        const cursoId = e.target.getAttribute('data-id');

        //obtenemos la etiqueta que contenga el data-id seleccionado por el usuario
        const habilitarBoton = document.querySelector(`.button-carrito[data-id="${cursoId}"]`);

        //console.log(habilitarBoton);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                if(habilitarBoton){
                    //si el boton existe se remueve la clase disabled del boton
                    habilitarBoton.classList.remove('disabled');
                }

                carritoHTML();
            }
        });
        
    }
}