import { useContext } from "react";
import UserContext from "./UserContext";
function CalculatorComponent() {
    
    const user = useContext(UserContext);
    console.log(user);
    return (
        <h1 className="calculatorHeader">{user.value}</h1>
    );
}
export default CalculatorComponent;