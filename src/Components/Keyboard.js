import Boton from './Boton';

function Keyboard({onButtonClick}) {
    
    // Creamos un array con los valores de cada uno de los botones
    const botones = [
        {valor:"Q"},
        {valor:"W"},
        {valor:"E"},
        {valor:"R"},
        {valor:"T"},
        {valor:"Y"},
        {valor:"U"},
        {valor:"I"},
        {valor:"O"},
        {valor:"P"},
        {valor:"A"},
        {valor:"S"},
        {valor:"D"},
        {valor:"F"},
        {valor:"G"},
        {valor:"H"},
        {valor:"J"},
        {valor:"K"},
        {valor:"L"},
        {valor:"Ñ"},
        {valor:"Z"},
        {valor:"X"},
        {valor:"C"},
        {valor:"V"},
        {valor:"B"},
        {valor:"N"},
        {valor:"M"},
        {valor:" "},
        {valor:"DEL"}

        
    ]
    const handleButtonClick = (valor) => {
        // Llamamos a la función proporcionada desde el componente Result
        onButtonClick(valor);
    }
    
    // Mostramos todos los botones y le asignamos clase, valor y evento al hacer click
    return  <div className='keyboard'>
        {botones.map(item => (<Boton className="botones" valor={item.valor} onClick={() => handleButtonClick(item.valor)}></Boton>))}
    </div>
   


}

export default Keyboard;