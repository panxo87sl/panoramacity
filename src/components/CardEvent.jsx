import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardEvent = (props) => {
  const { addToCart, isInCart, removeCart, cart } = useContext(CartContext);
  const { id, imagen, nombre, productora, lugar, fecha, enlace, categoria } = props;

  const handleAddToCart = () => {
    if (!isInCart(id)) {
      addToCart({ id, imagen, nombre, productora, lugar, fecha, enlace, categoria }); // Aquí pasas datos mínimos para probar
    } else {
      removeCart(id);
    }
  };

  return (
    <article className="event-card">
      <img src={imagen} alt={nombre} />
      <div className="event-info" id="informacion">
        <h2>{nombre}</h2>
        <p id="productora">
          <strong>Productora:</strong> {productora}
        </p>
        <p id="lugar">
          <strong>Lugar:</strong> {lugar}
        </p>
        <p id="fecha">
          <strong>Fecha:</strong> {fecha}
        </p>
        <div className="event-info-buttons" id="botones">
          <Link to={`/evento/${id}`} className="event-info-link">
            Más información
          </Link>
          {/* <a href={enlace} target="_blank" className="event-like-link" id="enlace">
            sitio original
          </a> */}
          <button className={isInCart(id) ? "event-like-link event-like-disabled" : "event-like-link"} data-nombre={nombre} data-eventoid={id} id="like" onClick={handleAddToCart}>
            {isInCart(id) ? "Quitar" : "Agregar"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardEvent;
