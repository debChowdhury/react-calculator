import { useContext } from "react";
import UserContext from "./UserContext";

//functional component of calculator header
function CalculatorHeaderComponent() {
    //getting the context
    const user = useContext(UserContext);
    return (
        // showing the calculator value
        <h1 className="calculatorHeader">{user.value}</h1>
    );
}
export default CalculatorHeaderComponent;