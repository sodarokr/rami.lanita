import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import Counter from "./Components/Counter/Counter";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";

function App(props) {
  const greeting = "Bienvenidos a mi tienda!";

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route path="/detail/:idProducto" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting={"Bienvenidos a mi tienda!"} /> */}
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
