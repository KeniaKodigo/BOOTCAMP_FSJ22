/**
 * Directiva de Typescript: ECACScript para usar metodos find y findIndex
 */
///<reference lib="es2015" />
var Libro = /** @class */ (function () {
    function Libro(titulo, genero, anio_public) {
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
    Libro.agregarLibro = function (libro) {
        libro.id = this.ultimoId; // Libro.ultimoId
        this.libros.push(libro);
        this.ultimoId++;
        return true;
    };
    Libro.buscarLibro = function (id) {
        // si el libro existe, el metodo find recupera el libro en libroEncontrado
        /**
         * find
         * filter
         */
        var libroEncontrado = this.libros.find(function (libro) { return libro.id === id; });
        if (!libroEncontrado) {
            console.log("No se encontro el libro con ID: ".concat(id, "."));
            return undefined;
        }
        return libroEncontrado;
    };
    Libro.eliminarLibro = function (id) {
        //Necesitamos conocer el indice del objeto que queremos eliminar dentro de libros
        /**
         * respuesta = posicion (0,1,3...)
         * respuesta = -1 (posicion no existe)
         * [1,2,3,4,5,6,7,8]
         */
        var indice = this.libros.findIndex(function (elemento) { return elemento.id == id; }); //posicion
        if (indice == -1) {
            return false;
        }
        //splice: elimina elmentos de un array segun el indice de los mismos
        this.libros.splice(indice, 1);
        return true;
    };
    //private autor: string
    //El arreglo de Libros:
    Libro.libros = [];
    Libro.ultimoId = 1;
    return Libro;
}());
/* Creacion Dinamica de componentes HTML👇🏻 */
var btnGuardar = document.getElementById('btnGuardar');
var txtId = document.getElementById('txtId');
var txtTitulo = document.getElementById('txtTitulo');
var txtGenero = document.getElementById('txtGenero');
var txtAnioPublicacion = document.getElementById('txtAnioPublicacion');
var tbody = document.querySelector('tbody');
var modal = document.getElementById('exampleModal');
//nuevo_libro: Saber si se apreto el boton de [Agregar Libro]
var nuevo_libro = true; //nuevo libro
var libro; //crear el objeto
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
btnGuardar.addEventListener('click', function () {
    //validamos la entrada del modal
    if (nuevo_libro == true) {
        //crear libro
        libro = new Libro(txtTitulo.value, txtGenero.value, parseInt(txtAnioPublicacion.value));
        var resultado = Libro.agregarLibro(libro); //true / false
        if (resultado) {
            // Swal.fire({
            //     icon: "success",
            //     title: "Exito",
            //     text: "Se ha registrado correctamente"
            // });
            //actualizame la tabla
            tablaLibros();
            //cerramos el modal con jquery
            $('#exampleModal').modal('hide')
            vaciarModal();
        }
        else {
            console.log("Error al guardar el libro");
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Something went wrong!",
            //     footer: '<a href="#">Why do I have this issue?</a>'
            // });
        }
        console.log(Libro.libros); //[]
    }
    else {
        //editar un libro
        if (libro) {
            //actualizamos el objeto con los valores del input
            libro.titulo = txtTitulo.value;
            libro.genero = txtGenero.value;
            libro.anio_publicacion = parseInt(txtAnioPublicacion.value);
            tablaLibros();
            $('#exampleModal').modal('hide')
            vaciarModal();
        }
    }
});
//metodo para mostrar los libros en la tabla html
function tablaLibros() {
    var tablaLibro = "";
    //si es un arreglo como se puede iterar => for, foreach, while, do while, map
    for (var i = 0; i < Libro.libros.length; i++) {
        var editar = "<button class='btn btn-success' onclick=\"editarLibro(".concat(Libro.libros[i].id, ")\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">Editar</button>");
        var eliminar = "<button class='btn btn-danger' onclick=\"eliminarLibro(".concat(Libro.libros[i].id, ")\">Eliminar</button>'");
        tablaLibro += "<tr>\n            <td>".concat(Libro.libros[i].id, "</td>\n            <td>").concat(Libro.libros[i].titulo, "</td>\n            <td>").concat(Libro.libros[i].genero, "</td>\n            <td>").concat(Libro.libros[i].anio_publicacion, "</td>\n            <td>").concat(editar, " ").concat(eliminar, "</td>\n        </tr>");
    }
    tbody.innerHTML = tablaLibro;
}
function vaciarModal() {
    txtTitulo.value = "";
    txtGenero.value = "";
    txtAnioPublicacion.value = "";
    nuevo_libro = true;
}
function editarLibro(id) {
    nuevo_libro = false;
    //Llamando al metodo buscarLibro de la clase
    libro = Libro.buscarLibro(id); //Objeto | undefined
    if (libro) {
        txtId.value = libro.id.toString();
        txtTitulo.value = libro.titulo.toString();
        txtGenero.value = libro.genero.toString();
        txtAnioPublicacion.value = libro.anio_publicacion.toString();
    }
}
function eliminarLibro(id) {
    var resultado = Libro.eliminarLibro(id);
    if (resultado) {
        tablaLibros();
    }
    else {
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
