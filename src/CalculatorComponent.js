import CalculatorBodyComponent from "./CalculatorBodyComponent";
import CalculatorHeaderComponent from "./CalculatorHeaderComponent";
import UserContext from "./UserContext";
import { useState } from "react";

//the calculator component
function CalculatorComponent() {

    //function to change and set the value of the calculator
    const changeValue = (val) => {
        setResultObj(() => ({
            value: val,
            changeValue
        }));

    }

    //use state constant which has a result object. The obj has a value and a method to change that value
    const [resultObj, setResultObj] = useState({
        value:'0',
        changeValue
    });
    return (
        // A context provider to send the calculator value across all components
        <UserContext.Provider value={resultObj}>
            {/* the container div */}
            <div className="container">
                {/* the calculator div */}
                <div className="calculator">
                    {/* calculator component is divided into header and body components */}
                    <CalculatorHeaderComponent />
                    <CalculatorBodyComponent />
                </div>
            </div>
            
        </UserContext.Provider>
        
    );
}
export default CalculatorComponent;