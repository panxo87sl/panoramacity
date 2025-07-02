import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeCart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <main>
      <h2>Mi Agenda</h2>
      {cart.length === 0 ? (
        <div>
          <p className="cart-body-text">No hay eventos en la agenda</p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <article key={item.id} className="cart-event-card">
              <img src={item.imagen} alt={item.nombre} />
              <div className="cart-event-info">
                <h2>{item.nombre}</h2>
                <p>${item.precio}</p>
                <p>cantidad: {item.cantidad}</p>
              </div>
              <button className="cart-like-link" onClick={() => removeCart(item.id)}>
                Quitar
              </button>
            </article>
          ))}
          <div>
            <hr />
            <h2>Total Compra: ${cartTotal()}</h2>
          </div>

          <div className="cart-link-container">
            <Link to="/Checkout" className="cart-finish-link">
              Agendar Eventos
            </Link>
            <button className="cart-finish-button" onClick={() => clearCart()}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
      <div>
        <Link to="/" className="cart-body-text">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default Cart;
