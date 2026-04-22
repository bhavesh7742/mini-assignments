import Fooditems from "./components/Fooditems";
import Errormsg from "./components/Errormsg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  let fooditems = ["Pizz", "Burger", "Pasta", "Salad", "Sushi"];
  return (
    // react.fragment bhi likh sakte hai isme or ye extra div add na ho isliye karna padta hai 
    <>  
    <h1>healthy food</h1>
    <Errormsg items={fooditems}></Errormsg>
    <Fooditems items={fooditems}></Fooditems>

    </>
  );
}

export default App;
