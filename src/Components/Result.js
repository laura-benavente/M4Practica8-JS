import React, { useState } from 'react';
import Keyboard from "./Keyboard";


function Result(props){
    
    const [cadena, setCadena] = useState('');

    const handleButtonClick = (valor) => {
      // Impedimos que se sobrepase un límite de caracteres
      if(cadena.length > 100 && valor != "DEL")
        alert("¡LÍMITE DE CARACTERES EXCEDIDO!")
      else if // Actualizamos la cadena concatenando el nuevo valor
        (valor == "DEL")
          setCadena((prevCadena) => prevCadena.slice(0, -1))
      else
        setCadena((prevCadena) => prevCadena + valor);
    }
    return <div>
        <div className='resultado'><p>{cadena}</p></div>
        
        {/* Pasamos la función de actualización a Keyboard */}
        <Keyboard onButtonClick={handleButtonClick} />


    </div>
}

export default Result