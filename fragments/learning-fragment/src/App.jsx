import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let fooditem = [];
  let fooditem = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  return (
    // react.fragment bhi likh sakte hai isme or ye extra div add na ho isliye karna padta hai 
    <>  
      <h1>Food items</h1>
      {fooditem.length === 0 ? <h3>i am still hungry</h3> : null}
      <ul className="list-group">
        {fooditem.map((item) => (
          <li keys={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
