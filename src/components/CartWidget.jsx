import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartLength } = useContext(CartContext);
  return (
    <div className="icon-container">
      <i className="material-icons">event</i>
      <span
        id="notification-badge"
        className="notification-badge"
        style={{
          backgroundColor: cartLength() > 0 ? "red" : "grey",
        }}
      >
        {cartLength()}
      </span>
    </div>
  );
};

export default CartWidget;
