import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCartContainer from "./Containers/ItemCartContainer/ItemCartContainer";

import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";

function App(props) {
  const greeting = "Bienvenidos a mi tienda!";

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />
            <Route path="/rami.lanita/" element={<Navigate to="/" />} />

            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer greeting={greeting} />}
            />
            <Route
              path="/detail/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart/" element={<ItemCartContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
