

let arreglo_curso = [
    {
        curso: "curso1",
        id:1
    },
    {
        curso: "curso de css",
        id:3
    },
    {
        curso: "curso de javascript",
        id:4
    }
]

function eliminar(id){
    
    for(let i = 0; i < arreglo_curso.length; i++){
        if(arreglo_curso[i].id == 2){
            arreglo_curso.slice(i)
        }
    }

    //filter  (map)
    arreglo_curso = arreglo_curso.filter(curso => curso.id !== id);
}

eliminar(2);
eliminar(10);