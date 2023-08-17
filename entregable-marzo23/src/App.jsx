import { useState } from 'react';
import style from './App.module.css';
import validate from "./utils/validate";
import Card from './components/Card';

function App() {

  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: ""
  })
  const [error, setErrors] = useState({});
  const [card, setCard] = useState(false)

  const handleInputs = (event) =>{
      setInputs({
        ...inputs,
        [event.target.name] : event.target.value
      })
      setErrors(validate({
        ...inputs,
        [event.target.name]: event.target.value
      }))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      setErrors({})
      setCard(!card);
    }
  }

  return (
    <div className={style.divForm}>
      <h1 className={style.title}>Postulación para presidente</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.allTitles}>
          <label className={style.labels}>Nombre</label>
            <input 
              className={style.allInputs}
              type="text" 
              name="nombre"
              value={inputs.nombre}
              placeholder={"Coloca tu nombre"}
              onChange={(event)=>handleInputs(event)}/>
              {error.nombre && <span>{error.nombre}</span>}
        </div>
        <div className={style.allTitles}>
          <label className={style.labels}>Apellido</label>
            <input 
              className={style.allInputs}
              type="text" 
              name="apellido"
              value={inputs.apellido}
              placeholder={"Coloca tu apellido"}
              onChange={(event)=>handleInputs(event)}/>
              {error.apellido && <span className={style.errors}>{error.apellido}</span>}
        </div>
        <button type='submit' className={style.btn}>Enviar</button>
      </form>
      {card &&(

      <Card nombre={inputs.nombre} apellido={inputs.apellido}/>
      )}
    </div>
  )
}

export default App
