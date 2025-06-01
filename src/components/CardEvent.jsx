import { Link } from "react-router-dom";

const CardEvent = (props) => {
  const { key, imagen, nombre, productora, lugar, fecha, enlace } = props;
  return (
    <article className="event-card">
      <img src={imagen} alt={nombre} />
      <div className="event-info" id="informacion">
        <h2>{nombre}</h2>
        {/* <p id="productora">
          <strong>Productora:</strong> {productora}
        </p> */}
        <p id="lugar">
          <strong>Lugar:</strong> {lugar}
        </p>
        <p id="fecha">
          <strong>Fecha:</strong> {fecha}
        </p>
        <div className="event-info-buttons" id="botones">
          <Link to={`/evento/${key}`} className="event-info-link">
            Más información
          </Link>
          <a
            href={enlace}
            target="_blank"
            className="event-like-link"
            id="enlace"
          >
            sitio original
          </a>
          {/* <button
            className="event-like-link"
            data-nombre={nombre}
            data-eventoid={id}
            id="like"
          >
            Agregar
          </button> */}
        </div>
      </div>
    </article>
  );
};

export default CardEvent;
