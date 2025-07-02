import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../service/firebase";

const Checkout = () => {
  // Estados para cada campo
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  const [emailValidate, setEmailValidated] = useState();
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const [orderID, setOrderID] = useState();
  const eventList = [...cart]; //hace una copia real de carrito
  const [savedEventList, setSavedEventList] = useState(); //guardar la info de carrito y evitar la perdida al renderizar nuevamente el componente por el cambio de estado de OrderID, para mostrar la info nuevamente al final como confirmación.
  const [errors, setErrors] = useState({}); //para controlar las validaciones del formulario
  const [busy, setBusy] = useState(false); //para evitar apretar el boton Finalizar del formulario mas de una vez
  const navigate = useNavigate(); //para redireccionar

  useEffect(() => {
    if (cart.length === 0) {
      navigate("*"); // para no ingresar directamente
    }
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusy(true);
    //Validacion manual campos del formulario
    const newErrors = {};
    if (!nombre) newErrors.nombre = "Este campo es obligatorio";
    if (!apellido) newErrors.apellido = "Este campo es obligatorio";
    if (!email) newErrors.email = "Este campo es obligatorio";
    if (email !== emailValidate) newErrors.emailValidate = "Los correos no coinciden";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setBusy(false);
      return; // se detiene si hay errores
    }
    setErrors({}); // limpia errores si todo está bien
    //fin Validacion

    const totalEventos = cart.length;
    const buyer = {
      nombre: nombre,
      apellido: apellido,
      email: email,
    };

    let orden = {
      comprador: buyer,
      agenda: cart,
      total: totalEventos,
      data: serverTimestamp(),
    };
    const registro = collection(db, "orders");

    //agregar un doc a firebase
    addDoc(registro, orden)
      .then((response) => {
        setSavedEventList(eventList);
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
              <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className={`form-input ${errors.nombre ? "input-error" : ""}`} />
              {errors.nombre && <p className="error-text">{errors.nombre}</p>}
            </div>

            <div className="form-input-container">
              <label>Apellido:</label>
              <br />
              <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className={`form-input ${errors.apellido ? "input-error" : ""}`} />
              {errors.apellido && <p className="error-text">{errors.apellido}</p>}
            </div>

            <div className="form-input-container">
              <label>Email:</label>
              <br />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={`form-input  input-email ${errors.email ? "input-error" : ""}`} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-input-container">
              <label>Repetir Email:</label>
              <br />
              <input
                type="email"
                placeholder="Repetir Emial"
                value={emailValidate}
                onChange={(e) => setEmailValidated(e.target.value)}
                className={`form-input input-email ${errors.emailValidate ? "input-error" : ""}`}
              />
              {errors.emailValidate && <p className="error-text">{errors.emailValidate}</p>}
            </div>

            <button className={`cart-finish-link ${busy ? "button-busy" : ""}`} type="submit">
              Finalizar
            </button>
          </form>
        </>
      ) : (
        <div className="cart-link-container">
          <h1> Generaste correctamente tu orden</h1>
          <h2> Eventos Agendados</h2>
          <div>
            {savedEventList.map((item) => (
              <article key={item.id} className="cart-event-card">
                <img src={item.imagen} alt={item.nombre} />
                <div className="cart-event-info">
                  <h2>{item.nombre}</h2>
                  <p>{item.fecha}</p>
                </div>
              </article>
            ))}
          </div>
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
