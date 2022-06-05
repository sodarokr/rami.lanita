import "./Counter.css";
import { useState } from "react";

const Counter = ({ valorInicial, stock }) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    contador < stock && setContador(contador + 1);
  };
  const decrementar = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <div className="Counter">
      <button className="Counter__boton" onClick={incrementar}>
        <img
          className="Counter__boton-icon"
          src={process.env.PUBLIC_URL + "/mas.png"}
        />
      </button>
      <p className="Counter__cantidad">{contador}</p>
      <button className="Counter__boton" onClick={decrementar}>
        <img
          className="Counter__boton-icon"
          src={process.env.PUBLIC_URL + "/menos.png"}
        />
      </button>
    </div>
  );
};

export default Counter;
