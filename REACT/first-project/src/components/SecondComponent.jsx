
export const SecondComponent = ({usuario}) => {
    return(
        <>
            <h2>Hola {usuario.nombre}, como estas?</h2>
            <h2>Tu edad es de {usuario.edad} anios</h2>
            <h2>Genero: {usuario.genero}</h2>
            <h2>Dui: {usuario.dui}</h2>
     </>
    )
}

