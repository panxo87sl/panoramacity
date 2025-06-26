import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../service/firebase";

const Checkout = () => {
  // Estados para cada campo
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidated] = useState("");
  const { cart, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nCalendario: ${email}`);
    const buyer = {
      nombre: nombre,
      apellido: apellido,
      email: email,
    };
    let orden = {
      comprador: buyer,
      agenda: cart,
      totalEventos: cart.length,
      data: serverTimestamp(),
    };
    const registro = collection(db, "orders");

    //agregar un doc a firebase
    addDoc(registro, orden)
      .then((response) => {
        setOrderID(response.id);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      {!orderID ? (
        <>
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-input-container">
              <label>Nombre:</label>
              <br />
              <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="form-input" />
            </div>

            <div className="form-input-container">
              <label>Apellido:</label>
              <br />
              <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required className="form-input" />
            </div>

            <div className="form-input-container">
              <label>Email:</label>
              <br />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input input-email" />
            </div>

            <div className="form-input-container">
              <label>Repetir Email:</label>
              <br />
              <input type="email" placeholder="Repetir Emial" value={emailValidate} onChange={(e) => setEmailValidated(e.target.value)} required className="form-input input-email" />
            </div>

            <button className="cart-finish-link" type="submit">
              Finalizar
            </button>
          </form>
        </>
      ) : (
        <div className="cart-link-container">
          <h2> Generaste correctamente tu orden</h2>
          <h1> Orden ID: {orderID}</h1>
          <Link to="/" className="cart-body-text">
            Volver al inicio
          </Link>
        </div>
      )}
    </main>
  );
};

export default Checkout;
