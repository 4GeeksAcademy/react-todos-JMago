import React from "react";
import '../../styles/Tareas.css';
import { AiOutlineCloseSquare } from "react-icons/ai";


const Tareas = ({id,texto, eliminarTarea, contador}) => {

    return(
        <div className="contenedor-tarea">
            <div className="texto-tarea">
                {texto}
            </div>
            <div onClick={() =>eliminarTarea(id)}>
                <AiOutlineCloseSquare className="box-icon-delete" />
            </div>
        </div>
    )
}


export default Tareas;