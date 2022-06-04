import Item from "../Item/Item";
import "./ItemList.css";
import Counter from "../Counter/Counter";

const ItemList = ({ productos }) => {
  return (
    <ul className="ItemList">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </ul>
  );
};

export default ItemList;
