import "./CartWidget.css";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <Link to={"/cart/"} className="cartWidget">
      <img
        src={process.env.PUBLIC_URL + "/img/cartIcon.svg"}
        className="cartIcon"
      />
      <p className="cartQuantity">{cantidadEnCarrito}</p>
    </Link>
  );
};

export default CartWidget;
