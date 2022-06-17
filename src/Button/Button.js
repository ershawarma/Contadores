const Button = (props) => {
    console.log('button', props)    
    return(
            <div>
                <button onClick={props.operacion}>{props.label}</button>
            </div>
        )
}
export default Button;