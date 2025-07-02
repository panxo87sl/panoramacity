import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardEvent = (props) => {
  const { addToCart, cart } = useContext(CartContext);
  const { id, imagen, nombre, productora, lugar, fecha, enlace, categoria, precio, stock } = props;

  const handleAddToCart = () => {
    addToCart({ id, imagen, nombre, productora, lugar, fecha, enlace, categoria, precio, stock }); // Aquí pasas datos mínimos para probar
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
        <p id="precio">
          <strong>Precio: $</strong> {precio}
        </p>
        <div className="event-info-buttons" id="botones">
          <Link to={`/evento/${id}`} className="event-info-link">
            Más información
          </Link>
          {/* <a href={enlace} target="_blank" className="event-like-link" id="enlace">
            sitio original
          </a> */}
          <button className="event-like-link" data-nombre={nombre} data-eventoid={id} id="like" onClick={handleAddToCart}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardEvent;
