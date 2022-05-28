import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img src="img/cartIcon.svg" className="cartIcon" />
      <p className="cartQuantity">0</p>
    </div>
  );
};

export default CartWidget;
