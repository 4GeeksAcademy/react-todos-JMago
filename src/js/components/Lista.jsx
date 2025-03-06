import React,{useState} from "react";
import '../../styles/Lista.css';
import '../../styles/Contador.css'
import Tareas from "./Tareas";
import Formulario from "./Formulario";

const Lista = () =>{

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
      if (tarea.texto !== ('')){
        const tareasActualizadas =[tarea, ...tareas];
        setTareas(tareasActualizadas);
      }
    }

    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }


    return(
        <div>
            <Formulario onSubmit ={agregarTarea}/>
            <div className="tareas-lista">
                {
                  tareas.map(
                    (tareas) => <Tareas key={tareas.id} id={tareas.id} texto={tareas.texto} eliminarTarea={eliminarTarea}/>
                  )
                }
            </div>
            <div className="contador">
              <p>{tareas.length} item left</p>
            </div>
        </div>
    );
}

export default Lista;