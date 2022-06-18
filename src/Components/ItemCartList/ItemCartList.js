import "./ItemCartList.css";
import ItemCart from "../ItemCart/ItemCart";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

const ItemCartList = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div className="ItemCartList">
      {carrito.map((producto) => {
        return <ItemCart key={producto.id} {...producto} />;
      })}
    </div>
  );
};

export default ItemCartList;
