import React,{useState} from "react";

const States = () =>{
    const[curso,setCurso]= useState ("React JS State");

    const modificarCurso= () =>{
        setCurso("REACTTT");
    }

    return(
        <div>
            <h1 onClick={modificarCurso}>Estados/States</h1>
            <p>Curso: <b>{curso}</b></p>
        </div>
    )
}

export default States;

//useStates es un Hook que vimos en la clase de Componentes II//