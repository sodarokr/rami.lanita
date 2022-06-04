import "./ItemListContainer.css";
import ItemList from "../../Components/ItemList/ItemList";
import { getProductos } from "../../asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((response) => {
      setProductos(response);
      // console.log(response);
    });
  }, []);

  // console.log("voy a montar el component");
  return (
    <div className="ItemListContainer">
      <h1 className="greeting">{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
