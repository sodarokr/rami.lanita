import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda!"} />
    </div>
  );
}

export default App;
