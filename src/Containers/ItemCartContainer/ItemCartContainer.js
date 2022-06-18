import "./ItemCartContainer.css";
import ItemCartList from "../../Components/ItemCartList/ItemCartList";
import ButtonPrimario from "../../Components/ButtonPrimario/ButtonPrimario";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const ItemCartContainer = () => {
  const { vaciarCarrito, cantidadEnCarrito, totalEnCarrito } =
    useContext(CartContext);

  return (
    <div className="App-body">
      <div className="ItemCartContainer">
        <div className="ItemCartContainer__titulo">
          <h1 className="greeting">Tu carrito</h1>
        </div>
        {cantidadEnCarrito > 0 ? (
          <>
            <div className="ItemCartContainer__lista">
              <ItemCartList />
            </div>
            <div className="ItemCartContainer__total">
              Total:{" "}
              <span className="ItemCartContainer__total-monto">
                {"$" + totalEnCarrito}
              </span>
            </div>
            <div className="ItemCartContainer__acciones">
              <div className="ItemCartContainer__acciones_botonera">
                <ButtonPrimario
                  accion={() => vaciarCarrito()}
                  texto="Quitar todos"
                  tipoBoton={"danger"}
                />
                <ButtonPrimario
                  accion={() => {}}
                  texto="Terminar compra"
                  tipoBoton={"confirmar"}
                />
              </div>
            </div>
          </>
        ) : (
          <h2 className="ItemCartContainer__lista-NoProductos">
            No hay productos para mostrar aquí
          </h2>
        )}
      </div>
    </div>
  );
};

export default ItemCartContainer;
