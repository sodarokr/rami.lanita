import Item from "../Item/Item";
import "./ItemList.css";
import Counter from "../Counter/Counter";

const ItemList = ({ productos, encabezados }) => {
  return (
    <ul className="ItemList">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          encabezados={encabezados ? true : false}
          {...producto}
        />
      ))}
    </ul>
  );
};

export default ItemList;
