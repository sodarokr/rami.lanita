import "./ButtonPrimario.css";
const ButtonPrimario = ({ accion, tipoBoton, texto }) => {
  const getEstilo = (tipoBoton) => {
    switch (tipoBoton) {
      case "primario":
        return "ButtonPrimario ButtonPrimarioAceptar";
        break;
      case "danger":
        return "ButtonPrimario ButtonPrimarioDanger";
        break;
      case "confirmar":
        return "ButtonPrimario ButtonPrimarioConfirma";
        break;
    }
  };

  return (
    <button onClick={accion} className={getEstilo(tipoBoton)}>
      {texto}
    </button>
  );
};

export default ButtonPrimario;
