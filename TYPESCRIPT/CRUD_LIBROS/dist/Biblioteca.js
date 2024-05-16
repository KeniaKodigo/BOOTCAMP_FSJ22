"use strict";
class Libro {
    constructor(titulo, genero, anio_public) {
        this.id = 0;
        this.titulo = titulo;
        this.genero = genero;
        this.anio_publicacion = anio_public;
    }
    static agregarLibro(libro) {
        libro.id = this.ultimoId;
        this.libros.push(libro);
        this.ultimoId++;
        return true;
    }
    static buscarLibro(id) {
        const libroEncontrado = this.libros.find(libro => libro.id === id);
        if (!libroEncontrado) {
            console.log(`No se encontro el libro con ID: ${id}.`);
            return undefined;
        }
        return libroEncontrado;
    }
    static eliminarLibro(id) {
        let indice = this.libros.findIndex(elemento => elemento.id == id);
        if (indice == -1) {
            return false;
        }
        this.libros.splice(indice, 1);
        return true;
    }
}
Libro.libros = [];
Libro.ultimoId = 1;
//# sourceMappingURL=Biblioteca.js.map