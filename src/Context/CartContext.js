import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);
  const [totalEnCarrito, setTotalEnCarrito] = useState(0);

  useEffect(() => {
    let cantidadTotal = 0;

    carrito.forEach((producto) => {
      cantidadTotal += producto.cantidad;
    });

    setCantidadEnCarrito(cantidadTotal);
  }, [carrito]);

  useEffect(() => {
    let montoTotal = 0;

    carrito.forEach((producto) => {
      montoTotal += producto.cantidad * producto.precio;
    });

    setTotalEnCarrito(montoTotal);
  }, [carrito]);

  const agregarProducto = (producto) => {
    if (!isInCart(producto.id)) setCarrito([...carrito, producto]);
  };

  const quitarProducto = (idProducto) => {
    setCarrito(carrito.filter((producto) => producto.id !== idProducto));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const isInCart = (id) => {
    return carrito.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        agregarProducto,
        carrito,
        quitarProducto,
        isInCart,
        cantidadEnCarrito,
        vaciarCarrito,
        totalEnCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
