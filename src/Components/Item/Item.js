import react from "react";
import "./Item.css";
import Counter from "../Counter/Counter";
import ButtonSecundario from "../ButtonSecundario/ButtonSecundario";

const Item = ({ img, stock, precio, nombre, categoria, encabezados }) => {
  const agregarAlCarrito = () => {
    console.log("Agregar al carrito está Pendiente de Implmentar");
  };
  console.log("soy encabezado: ");
  console.log(encabezados);
  return (
    <li className="Item">
      {encabezados && <p className="Item__categoria">{categoria}</p>}
      <div className="Item__card">
        <img className="Item__card-img" src={img} />
        <p className="Item__card-nombre">{nombre}</p>
        <p className="Item__card-precio">$ {precio}</p>
        <p className="Item__card-stock">Stock: {stock} unidades.</p>
      </div>
      <Counter valorInicial={0} stock={stock} />
      <ButtonSecundario accion={agregarAlCarrito} />
    </li>
  );
};

export default Item;
