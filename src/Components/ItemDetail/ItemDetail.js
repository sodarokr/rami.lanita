import "./ItemDetail.css";
import { loremIpsum, LoremIpsum } from "lorem-ipsum";
import Counter from "../Counter/Counter";
import ButtonSecundario from "../ButtonSecundario/ButtonSecundario";

const ItemDetail = ({ img, categoria, nombre, precio, stock }) => {
  return (
    <div className="ItemDetail">
      <div className="ItemDetail__imgContainer">
        <img
          className="ItemDetail__imgContainer-img"
          src={process.env.PUBLIC_URL + img}
        ></img>
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
            <span className="stockDisponible">Stock Disponible: </span> {stock}
            unidades.
          </p>
          <div className="ItemDetail__descContainer_producto-contador">
            <Counter valorInicial={0} stock={stock} />
          </div>
          <div className="ItemDetail__descContainer_producto-botonCarrito">
            <ButtonSecundario
              accion={() => console.log("Accion no implementada")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
