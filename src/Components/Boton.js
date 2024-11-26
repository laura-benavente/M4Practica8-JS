import Result from "./Result";
import { useState } from 'react';
// El nombre del componente "Button" lo pongo en español para que no haya problemas de nombre.
function Boton(props){
    // Le indicamos al botón que tendrá un evento y un valor, que se los daremos desde los demás componentes
    return (
        <button className="botones" onClick={props.onClick}>{props.valor}</button>
      );
    }












export default Boton;