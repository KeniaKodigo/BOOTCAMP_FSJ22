/**
 * Directiva de Typescript: ECACScript para usar metodos find y findIndex
 */

///<reference lib="es2015" />

//import Swal from 'sweetalert2'
type LibroObjeto = {
    id: number;
    titulo: string;
    genero: string;
    anio_publicacion: number;
}

class Libro {
    id: number
    titulo: string
    genero: string
    anio_publicacion: number
    //private autor: string

    //El arreglo de Libros:
    static libros: LibroObjeto[] = []
    static ultimoId: number = 1

    constructor(titulo: string, genero: string, anio_public: number) {
        this.id = 0;
        this.titulo = titulo;
        this.genero = genero;
        this.anio_publicacion = anio_public;
    }

    //get y set
    // setAutor(autor: string): void{
    //     this.autor = autor
    // }

    // getAutor(){
    //     return this.autor
    // }

    // imprimir(){
    //     return "Titulo:" + this.titulo + 
    //             "Autor: " + this.getAutor()
    // }

    /**
     * Mis metodos:
     */

    // Agregar un libro (LibroObjeto en el arreglo libros[])
    static agregarLibro(libro: LibroObjeto): boolean{
        libro.id = this.ultimoId; // Libro.ultimoId
        this.libros.push(libro);
        this.ultimoId++;
        return true;
    }

    static buscarLibro(id: number): LibroObjeto | undefined {
        // si el libro existe, el metodo find recupera el libro en libroEncontrado

        /**
         * find
         * filter
         */
        const libroEncontrado = this.libros.find(libro => libro.id === id);

        if(!libroEncontrado) {
            console.log(`No se encontro el libro con ID: ${id}.`);
            return undefined;
        }
        return libroEncontrado;
    }

    static eliminarLibro(id: number): boolean {
        //Necesitamos conocer el indice del objeto que queremos eliminar dentro de libros
        /**
         * respuesta = posicion (0,1,3...)
         * respuesta = -1 (posicion no existe)
         * [1,2,3,4,5,6,7,8]
         */
        let indice = this.libros.findIndex(elemento => elemento.id == id); //posicion

        if (indice == -1) {
            return false;
        }
        //splice: elimina elmentos de un array segun el indice de los mismos
        this.libros.splice(indice, 1);
        return true;
    }

    // static imprimirLibro() {
    //     let detalleLibros: string = '';
    //     this.libros.map(libro => {
    //         detalleLibros += `ID: ${libro.id} - Titulo: ${libro.titulo}\n`;
    //     });
    //     return detalleLibros;
    // }

}

/* Creacion Dinamica de componentes HTML👇🏻 */
const btnGuardar = document.getElementById('btnGuardar') as HTMLElement;

const txtId = document.getElementById('txtId') as HTMLInputElement;
const txtTitulo = document.getElementById('txtTitulo') as HTMLInputElement;
const txtGenero = document.getElementById('txtGenero') as HTMLInputElement;
const txtAnioPublicacion = document.getElementById('txtAnioPublicacion') as HTMLInputElement;

const tbody = document.querySelector('tbody') as HTMLElement;
const modal = document.getElementById('exampleModal') as HTMLElement;

//nuevo_libro: Saber si se apreto el boton de [Agregar Libro]
let nuevo_libro:boolean = true; //nuevo libro
let libro: LibroObjeto | undefined; //crear el objeto

//Crear objetos
// let objeto = new Libro();
// objeto.setAutor("Willian Sheakpears");
// objeto.getAutor();
// objeto.genero = "jdjd"

//Estaticos
//Libro.libros

/**
 * Metodos para trabajar con nuestros libros desde index.html
 */

btnGuardar.addEventListener('click', () => {
    //validamos la entrada del modal
    if(nuevo_libro == true){
        //crear libro
        libro = new Libro(txtTitulo.value, txtGenero.value, parseInt(txtAnioPublicacion.value));


        let resultado = Libro.agregarLibro(libro) //true / false
        if(resultado){
            // Swal.fire({
            //     icon: "success",
            //     title: "Exito",
            //     text: "Se ha registrado correctamente"
            // });
            //actualizame la tabla
            tablaLibros();
            vaciarModal();
        }else{
            console.log("Error al guardar el libro");
            
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Something went wrong!",
            //     footer: '<a href="#">Why do I have this issue?</a>'
            // });
        }
        console.log(Libro.libros); //[]

    }else{
        //editar un libro
        if(libro){
            //actualizamos el objeto con los valores del input
            libro.titulo = txtTitulo.value;
            libro.genero = txtGenero.value;
            libro.anio_publicacion = parseInt(txtAnioPublicacion.value);

            tablaLibros();
            vaciarModal();
        }
    }
    
})

//metodo para mostrar los libros en la tabla html
function tablaLibros(){
    let tablaLibro:string = "";
    //si es un arreglo como se puede iterar => for, foreach, while, do while, map

    for(let i = 0; i < Libro.libros.length; i++){
        let editar:string = `<button class='btn btn-success' onclick="editarLibro(${Libro.libros[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>`;

        let eliminar:string = `<button class='btn btn-danger' onclick="eliminarLibro(${Libro.libros[i].id})">Eliminar</button>'`;

        tablaLibro += `<tr>
            <td>${Libro.libros[i].id}</td>
            <td>${Libro.libros[i].titulo}</td>
            <td>${Libro.libros[i].genero}</td>
            <td>${Libro.libros[i].anio_publicacion}</td>
            <td>${editar} ${eliminar}</td>
        </tr>`;
    }

    tbody.innerHTML = tablaLibro;
}

function vaciarModal(){
    txtTitulo.value = "";
    txtGenero.value = "";
    txtAnioPublicacion.value = "";
    nuevo_libro = true;
}

function editarLibro(id: number){
    nuevo_libro = false;

    //Llamando al metodo buscarLibro de la clase
    libro = Libro.buscarLibro(id) //Objeto | undefined

    if(libro){
        txtId.value = libro.id.toString();
        txtTitulo.value = libro.titulo.toString();
        txtGenero.value = libro.genero.toString();
        txtAnioPublicacion.value = libro.anio_publicacion.toString();
    }
}

function eliminarLibro(id: number){
    let resultado = Libro.eliminarLibro(id);

    if(resultado){
        tablaLibros();
    }else{
        console.log("Hubo un error al eliminar el libro");
        
    }
}

// let libro1: LibroObjeto = {
//     id: 1,
//     titulo: "Libro 1",
//     genero: "novela",
//     anio_publicacion: 2020
// }

// let libro2: LibroObjeto = {
//     id: 1,
//     titulo: "El viejo y el mar",
//     genero: "novela",
//     anio_publicacion: 1950
// }
// let biblioteca = new Libro("", "", 1);
// biblioteca.agregarLibro(libro1);
// biblioteca.agregarLibro(libro2);
// console.log(biblioteca.imprimirLibro());



