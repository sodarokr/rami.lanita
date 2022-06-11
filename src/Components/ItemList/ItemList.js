import Item from "../Item/Item";
import "./ItemList.css";
import Counter from "../Counter/Counter";

const ItemList = ({ productos, categoria }) => {
  return (
    <>
      {!!categoria && <p className="titulo-categoria">{categoria}</p>}
      <ul className="ItemList">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            encabezados={!categoria ? true : false}
            {...producto}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
