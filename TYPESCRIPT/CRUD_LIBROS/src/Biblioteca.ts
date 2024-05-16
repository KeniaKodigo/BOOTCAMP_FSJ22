/**
 * Directiva de Typescript: ECACScript para usar metodos find y findIndex
 */
///<reference lib="es2015" />

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

    //El arreglo de Libros:
    static libros: LibroObjeto[] = []
    static ultimoId: number = 1

    constructor(titulo: string, genero: string, anio_public: number) {
        this.id = 0;
        this.titulo = titulo;
        this.genero = genero;
        this.anio_publicacion = anio_public;
    }

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
        const libroEncontrado = this.libros.find(libro => libro.id === id);

        if(!libroEncontrado) {
            console.log(`No se encontro el libro con ID: ${id}.`);
            return undefined;
        }
        return libroEncontrado;
    }

    static eliminarLibro(id: number): boolean {
        //Necesitamos conocer el indice del objeto que queremos eliminar dentro de libros
        let indice = this.libros.findIndex(elemento => elemento.id == id);

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
let nuevo_libro:boolean = true;
let libro: LibroObjeto | undefined;

/**
 * Metodos para trabajar con nuestros libros desde index.html
 */

btnGuardar.addEventListener('click', () => {
    libro = new Libro(txtTitulo.value, txtGenero.value, parseInt(txtAnioPublicacion.value))
})


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



