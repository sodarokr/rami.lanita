import "./Counter.css";
import ButtonSecundario from "../ButtonSecundario/ButtonSecundario";
import { useState } from "react";

const Counter = ({ valorInicial, stock, accionAgregar }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    contador < stock && setContador(contador + 1);
  };
  const decrementar = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <div className="Counter">
      <div className="Counter__contador">
        <button className="Counter__contador_boton" onClick={decrementar}>
          <img
            className="Counter__contador_boton-icon"
            src={process.env.PUBLIC_URL + "/menos.png"}
          />
        </button>
        <p className="Counter__contador_cantidad">{contador}</p>
        <button className="Counter__contador_boton" onClick={incrementar}>
          <img
            className="Counter__contador_boton-icon"
            src={process.env.PUBLIC_URL + "/mas.png"}
          />
        </button>
      </div>
      <ButtonSecundario onClick={() => accionAgregar(contador)} />
    </div>
  );
};

export default Counter;
