import "./ItemListContainer.css";
import ItemList from "../../Components/ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (!idCategoria) {
      getProductos().then((response) => {
        setProductos(response);
      });
    } else {
      getProductosPorCategoria(idCategoria).then((response) => {
        setProductos(response);
      });
    }
  }, [idCategoria]);

  return (
    <div className="App-body">
      <div className="ItemListContainer">
        <h1 className="greeting">{greeting}</h1>
        <ItemList productos={productos} encabezados={!idCategoria} />
      </div>
    </div>
  );
};

export default ItemListContainer;
