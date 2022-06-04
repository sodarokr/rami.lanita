import "./ButtonSecundario.css";
const ButtonSecundario = ({ accion }) => {
  return (
    <button onClick={accion} className="ButtonSecundario">
      Agregar al carrito
    </button>
  );
};

export default ButtonSecundario;
