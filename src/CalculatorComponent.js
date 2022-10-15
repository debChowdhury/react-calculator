import CalculatorBodyComponent from "./CalculatorBodyComponent";
import CalculatorHeaderComponent from "./CalculatorHeaderComponent";
import UserContext from "./UserContext";
import { useState } from "react";
function CalculatorComponent() {

    const changeValue = (val) => {
        setResultObj(() => ({
            value: val,
            changeValue
        }));

    }

    const [resultObj, setResultObj] = useState({
        value:'0',
        changeValue
    });
    return (
        <UserContext.Provider value={resultObj}>
            <div className="container">
                <div className="calculator">
                    <CalculatorHeaderComponent />
                    <CalculatorBodyComponent />
                </div>
            </div>
            
        </UserContext.Provider>
        
    );
}
export default CalculatorComponent;