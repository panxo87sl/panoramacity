import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="icon-container">
      <i className="material-icons">event</i>
      <span
        id="notification-badge"
        className="notification-badge"
        style={{
          backgroundColor: cart.length > 0 ? "red" : "grey",
        }}
      >
        {cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
