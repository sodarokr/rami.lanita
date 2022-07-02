import react from "react";
import "./Item.css";
import Counter from "../Counter/Counter";
import ButtonSecundario from "../ButtonSecundario/ButtonSecundario";
import { Link } from "react-router-dom";

const Item = ({ id, img, stock, precio, nombre, categoria, encabezados }) => {
  return (
    <li className="Item">
      {encabezados && <p className="Item__categoria">{categoria}</p>}
      <div className="Item__card">
        <Link to={"/detail/" + id}>
          <img className="Item__card-img" src={img} />
        </Link>

        <p className="Item__card-nombre">{nombre}</p>
        <p className="Item__card-precio">$ {precio}</p>
        <p className="Item__card-stock">Stock: {stock} unidades.</p>
      </div>

      <div className="Item__card-verDetalle">
        <Link to={"/detail/" + id}>Ver detalle</Link>
      </div>
    </li>
  );
};

export default Item;
