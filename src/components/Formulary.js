import React, {useState} from 'react';
import '../stylesheets/Formulary.css'

function Formulary ({createTask}) {

  const [Task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();  //prevenimos que la pagina se reinicie al hacer click en enviar
    createTask(Task); //funcion traida por props, incluye a la lista la tarea
    setTask('');
  }

  return(
    <div>

      <form onSubmit={handleSubmit}>

        <input className='inputFormulary' type="text" placeholder='Ingrese una tarea' maxLength="30" value={Task} onChange={(e) => setTask(e.target.value)}/>

        <button className='inputButton'>Agregar</button>
          
      </form>

    </div>
  )
}

export default Formulary;