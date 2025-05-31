import CardEvent from "./CardEvent";

const ItemList = ({ eventos }) => {
  return (
    <section className="event-list" id="lista-eventos">
      {eventos.map((evento) => (
        <CardEvent
          key={evento.key}
          imagen={evento.imagen}
          nombre={evento.nombre}
          lugar={evento.recinto + " - " + evento.ciudad}
          fecha={evento.fecha}
          enlace={evento.enlace}
        />
      ))}
    </section>
  );
};

export default ItemList;
