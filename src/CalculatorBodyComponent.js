import { useContext } from "react";
import UserContext from "./UserContext";
import { create, all } from 'mathjs'

// create a mathjs instance with configuration
const config = {
  epsilon: 1e-12,
  matrix: 'Matrix',
  number: 'BigNumber',
  precision: 64,
  predictable: false,
  randomSeed: null
}
const math = create(all, config);

//functional component for the calculator body

function CalculatorBodyComponent() {

    //getting the context
    const user = useContext(UserContext);
    //function to get the btn click value of the calculator body
    const getBtnValue = (event) => {
        let txt = event.target.innerText;
        //setting the value according to the btn clicked and evaluating the value when equals is clicked
        if(txt === "C"){
            //reset the value
            user.changeValue("0");
        }
        else if(user.value === "0" && txt !== "+/-"){
            //only use the current btn value
            user.changeValue(txt);
        }
        else if(txt === "="){
            //evaluate the value
            user.changeValue(math.string(math.evaluate(user.value)));
        }
        else if(txt === "+/-"){
            //alternate between positive and negative signs
            if(user.value.charAt(0) === "-"){
                user.changeValue(user.value.substring(1));
            }
            else{
                user.changeValue("-"+user.value);
            }
        }
        else{
            //setting the value
            user.changeValue(user.value+txt);
        }
        
    }

    return (
        // the whole calculator body div 
        <div className="calculatorBody">
            {/* first row */}
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">C</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">+/-</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">%</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">/</button>
            </div>
            {/* second row */}
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">7</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">8</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">9</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">*</button>
            </div>
            {/* third row */}
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">4</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">5</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">6</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">-</button>
            </div>
            {/* fourth row */}
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">1</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">2</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">3</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">+</button>
            </div>
            {/* fifth row */}
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} style={{width:'50%'}} className="calculatorBtn">0</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">.</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">=</button>
            </div>
        </div>
    );
}
export default CalculatorBodyComponent;