import './App.css';
import {useState} from "react"
// spread operator --> copias y unir objetos y arrays entre si 
// notacion de corchetes en objetos (bracket notation) 
// para usar variables en propiedades de objeto
// desestructuracion 

// const array = [ 1, 2, 3, 4, 5 ]
// const persona = { edad: 18, nombre: "Stefi",  }

// const [, , caca, pis, , ] = array
// // manera resumida de decir:
// // const variable = array[2]
// // const variable2 = array[3]

// const { edad, nombre: nombreStefi } = persona 
// manera resumida de decir:
// const nombreStefi = persona.nombre // "Stefi"
// const edad = persona.edad  // 18


// const variable = "provincia"
// const nombrePersona = "malena"
// const objeto = {
//   nombre: nombrePersona, 
//   apellido: "Rey", 
//   // puedo usar notacion de corchetes para usar variables en el nombre
//   // de las propiedades
//   [variable]: "Mendoza",
// }

// console.log(objeto)


function App() {

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "", 
    edad: "", 
    genero: "", 
    provincia: ""
  })

  const [error, setError] = useState(false)

  const handleChange = (e) => {
    // const valorDelInput = e.target.value
    // const nombreDelInput = e.target.name 
    setDatosFormulario({ 
      ...datosFormulario,
      [e.target.name ]: e.target.value, 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (!nombre || !edad || !provincia || !genero) {
    //     setError(true)
    // }
    // else {
    //   setError(false)
    // }
  }

  return (
    <div className="App">

      <h1>Adopte un gato</h1>

      { error &&
      <h2>ERROR, FALTA RELLENAR UN CAMPO</h2>
      }

      <form onSubmit={handleSubmit}>

        <label> Nombre
          <input 
            type="text" 
            name="nombre"
            onChange={handleChange}
            value={datosFormulario.nombre}
            ></input>
        </label>

        <label> Edad
          <input 
            type="number" 
            name="edad"
            onChange={handleChange}
            value={datosFormulario.edad}
            ></input>
        </label>

        <label> Genero del gatito buscado
          <p>Indistinto</p> 
          <input 
            type="radio" 
            value="indistinto" 
            name="genero"
            onChange={handleChange}
            checked={datosFormulario.genero === "indistinto"}
            />
          <p>Masc</p>  
          <input
           type="radio" 
           value="masculino" 
           name="genero"
           onChange={handleChange}
           checked={datosFormulario.genero === "masculino"}
            />
          <p>Fem</p>  
          <input 
          type="radio" 
          value="femenino" 
          name="genero"
          onChange={handleChange}
          checked={datosFormulario.genero === "femenino"}
           />
        </label>

        <label>provincia
          <select 
              name="provincia" 
              onChange={handleChange}
              value={datosFormulario.provincia}
            >
            <option value="ba">BA</option>
            <option value="mdz">Mendoza</option>
            <option value="cba">Cba</option>
          </select>
        </label>

      <input type="submit" value="Enviar" />

      </form>   

    </div>
  );
}

export default App;
