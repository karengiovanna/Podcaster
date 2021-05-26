import {useState} from 'react';

export default function Button(props){
    // estado que podemos armazenar no componente
    let [counter, setCounter] = useState(1); //use state devolve um arrary [estado, alterarEstado]

    function increment(){
        setCounter(counter +1);
        console.log(counter);
    }

    return(
        <>
        <span>{counter}</span>
        <button onClick={increment}>{props.children}</button> {/*recebendo title como filho*/}
        </>
    )
}