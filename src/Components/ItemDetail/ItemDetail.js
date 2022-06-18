import "./ItemDetail.css";
import { loremIpsum, LoremIpsum } from "lorem-ipsum";
import Counter from "../Counter/Counter";
import CartContext from "../../Context/CartContext";
import { useContext, useState } from "react";
import ButtonPrimario from "../ButtonPrimario/ButtonPrimario";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, img, categoria, nombre, precio, stock }) => {
  const { agregarProducto, isInCart } = useContext(CartContext);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

  const handleAgregarAlCarrito = (cantidad) => {
    agregarProducto({ id, img, nombre, precio, cantidad });
    setCantidadSeleccionada(cantidad);
  };

  return (
    <div className="ItemDetail">
      <div className="ItemDetail__imgContainer">
        <img className="ItemDetail__imgContainer-img" src={img}></img>
      </div>
      <div className="ItemDetail__descContainer">
        <div className="ItemDetail__descContainer_producto">
          <div className="ItemDetail__descContainer_producto-categoria">
            {"Categorías > " + categoria}
          </div>
          <p className="ItemDetail__descContainer_producto-titulo">{nombre}</p>
          <div className="ItemDetail__descContainer_producto-precio">
            ${precio}
          </div>
          <div className="ItemDetail__descContainer_producto-descripcion-titulo">
            Descripción:
          </div>
          <div className="ItemDetail__descContainer_producto-descripcion-body">
            {loremIpsum({
              units: "sentences",
              count: Math.floor(Math.random() * (9 - 6 + 1) + 6),
            })}
          </div>
        </div>
        <div className="ItemDetail__descContainer_buttons">
          <p className="ItemDetail__descContainer_producto-stock">
            <span className="stockDisponible">Stock Disponible: </span> {stock}{" "}
            unidades.
          </p>
          <div className="ItemDetail__descContainer_producto-contador">
            {isInCart(id) || cantidadSeleccionada > 0 ? (
              <Link to="/cart">
                <ButtonPrimario
                  accion={() => {}}
                  tipoBoton="confirmar"
                  texto="Terminar compra"
                />
              </Link>
            ) : (
              <Counter
                valorInicial={0}
                stock={stock}
                accionAgregar={handleAgregarAlCarrito}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
