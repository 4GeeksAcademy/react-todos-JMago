import React, {useState} from "react";
import '../../styles/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) =>{

    const [input, setInput] = useState('');
    const manejarCambios = e => {
        setInput(e.target.value)
    }
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input
        }
        props.onSubmit(tareaNueva);
    }
    return(
        <form onSubmit={manejarEnvio} className="tarea-formulario" action="">
            <input onChange={manejarCambios} className="tarea-input" type="text" placeholder="¿Que debo hacer?" />
        </form>

    )
}

export default Formulario;