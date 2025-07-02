import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext } from "react";

const EventoDetail = (props) => {
  const { detalleEvento } = props;
  if (!detalleEvento) return null;

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({
      id: detalleEvento.id,
      imagen: detalleEvento.imagen,
      nombre: detalleEvento.nombre,
      productora: detalleEvento.productora,
      lugar: detalleEvento.lugar,
      fecha: detalleEvento.fecha,
      enlace: detalleEvento.enlace,
      categoria: detalleEvento.categoria,
      precio: detalleEvento.precio,
      stock: detalleEvento.stock,
    }); // Aquí pasas datos mínimos para probar
  };
  return (
    <main>
      <h2>{detalleEvento.nombre}</h2>
      <section className="event-detail-info" id="lista-eventos">
        <img src={detalleEvento.imagen} alt={detalleEvento.nombre} />
        {/* <p>{detalleEvento.description}</p> */}
        <p>
          {detalleEvento.recinto} - {detalleEvento.ciudad}
        </p>
        <p>{detalleEvento.fecha}</p>
        <p>Precio Entrada: ${detalleEvento.precio}</p>
        <div className="cart-link-container">
          <ItemCount stock={detalleEvento.stock} onAdd={(cantidad) => addToCart(detalleEvento, cantidad)} />
          <a href={detalleEvento.enlace} target="_blank" className="event-info-link" id="enlace">
            Sitio Original
          </a>
        </div>
      </section>
    </main>
  );
};

export default EventoDetail;
