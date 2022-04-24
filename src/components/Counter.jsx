import {useState} from "react";

// useState é um hook
export function Counter() {
    // useState trabalha com arrays, ele traz dois resultados no array
    // por convenção da comunidade, o segundo elemento do array é para modificar
    let [counter, setCounter] = useState(0);
    function increment(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}