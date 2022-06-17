import Button from "../Button/Button";
import { useState } from "react";

const Contador = (props) => {
    console.log('contador', props);
    const [count, setCount] = useState(props.initial);

    const sumar = () => {
        if(count<props.stock) setCount(count+1)
    }
    const restar = () => {
        for (let i=0; i<2; i++) {
            setCount(prev => prev -1)
        }
    }
    const reset = () => {
        setCount(props.initial)
    }

return (
    <div>
        <h1>{props.titulo}</h1>
        <Button label={'+'} operacion={sumar}/>
        <h2>{count}</h2>
        <Button label={'-'} operacion={restar}/>
        <Button label={'Reset'} operacion={reset}/>
    </div>
)
}

export default Contador;