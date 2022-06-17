import Contador from "../Contador/Contador";
const Display = (props) => {
  console.log('display', props);
    return (
        <div>
            <Contador initial={10} titulo={'contador X'} stock={20}/>
            <Contador initial={20} titulo={'contador Y'} stock={30}/>
            <Contador initial={30} titulo={'contador Z'} stock={40}/>
        </div>
    )
}
export default Display;