import React, {useState} from 'react'

const PrimerComponente = () => {
    let web = "diegovargasweb.es";

    const[nombre, setNombre] = useState("Diego");

    let cursos = [
        "Proposito",
        "General",
        "Desarrollo"
    ]
    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
        <h1>TITULO</h1>
        <p>ESTE ES MI PRIMER COMPONENTE</p>
        <p>Mi nombre es <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar el nombre'/>

        <button onClick={e => cambiarNombre("Diego Vargas Ramirez")}>Cambiar Nombre</button>

        <h2>Cursos</h2>
        <ul>
            {
                cursos.map((curso,indice) => {
                    return <li key={indice}>
                        {curso}
                    </li>   
                })

            }
        </ul>
    </div>
  )
}

export default PrimerComponente
