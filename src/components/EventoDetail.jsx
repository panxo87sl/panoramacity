//importar el hook para la utilización de contexto
import { useContext } from "react";
//importar el tipo de contexto que voy a ocupar
import { CartContext } from "../context/CartContext";

const EventoDetail = (props) => {
  // const context = useContext(CartContext);
  const { cart } = useContext(CartContext);
  console.log(cart);
  const { detalleEvento } = props;
  return (
    <div>
      <h2>{detalleEvento.nombre}</h2>
      <section className="event-list" id="lista-eventos">
        <img src={detalleEvento.img} alt={detalleEvento.nombre} />
        {/* <p>{detalleEvento.description}</p> */}
        <p>
          {detalleEvento.recinto} - {detalleEvento.ciudad}
        </p>
        <p>{detalleEvento.fecha}</p>
        <a href={detalleEvento.enlace} target="_blank" className="event-info-link" id="enlace">
          Sitio Original
        </a>
      </section>
    </div>
  );
};

export default EventoDetail;
