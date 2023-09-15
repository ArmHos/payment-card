import "./App.scss";
import Card from "./components/card/Card";
import Register from "./components/register/Register";
// import visa from "./Assets/Images/visa.jpg";

function App() {
  console.log("rer");
  return (
    <div className="App">
      <Register />
      <Card />
    </div>
  );
}

export default App;
