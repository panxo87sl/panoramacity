import CardEvent from "./CardEvent";

const ItemList = ({ eventos }) => {
  return (
    <section className="event-list" id="lista-eventos">
      {eventos.map((evento) => (
        <CardEvent
          key={evento.id}
          id={evento.id}
          imagen={evento.imagen}
          productora={evento.productora}
          nombre={evento.nombre}
          lugar={evento.recinto + " - " + evento.ciudad}
          fecha={evento.fecha}
          enlace={evento.enlace}
          categoria={evento.categoria}
        />
      ))}
    </section>
  );
};

export default ItemList;
