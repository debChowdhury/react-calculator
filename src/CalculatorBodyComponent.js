import { useContext } from "react";
import UserContext from "./UserContext";
function CalculatorBodyComponent() {
    const user = useContext(UserContext);

    const getBtnValue = (event) => {
        let txt = event.target.innerText;
        console.log(txt);
        if(txt === "C"){
            user.changeValue("0");
        }
        else if(user.value === "0" && txt != "+/-"){
            user.changeValue(txt);
        }
        else if(txt === "="){
            user.changeValue(eval(user.value));
        }
        else if(txt === "+/-"){
            if(user.value.charAt(0) === "-"){
                user.changeValue(user.value.substring(1));
            }
            else{
                user.changeValue("-"+user.value);
            }
        }
        else{
            user.changeValue(user.value+txt);
        }
        
    }

    return (
        <div className="calculatorBody">
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">C</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">+/-</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">%</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">/</button>
            </div>
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">7</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">8</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">9</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">*</button>
            </div>
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">4</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">5</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">6</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">-</button>
            </div>
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">1</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">2</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">3</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">+</button>
            </div>
            <div className="calculatorBodyRow">
                <button onClick={(event) => getBtnValue(event)} style={{width:'50%'}} className="calculatorBtn">0</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn">.</button>
                <button onClick={(event) => getBtnValue(event)} className="calculatorBtn signBtns">=</button>
            </div>
        </div>
    );
}
export default CalculatorBodyComponent;