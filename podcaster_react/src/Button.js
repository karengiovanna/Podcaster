/* por padrão, o react não monitora os valores das variáveis para mostrar em tela quando mudarem
para isso acontecer precisamos utilizar o conceito chamado estado*/
import {useState} from 'react';

export default function Button(props){

    const [counter, setCounter] = useState(1); /*[] é array, conceito de dezestruturização */
    /* useState retorna duas informações */

    /*estado é uma informação que podemos  armazenar no componente para o valor ser alterado quando o usuário realizar uma ação*/
    
    function increment(){
        setCounter (counter +1);
    }


    return(
        <> {/* não pode haver dois elementos sem um elemento em volta*/}
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button> {/* vai mostrar o valor da variavel props.children na tela*/}
            <br />
        </>
    )
}