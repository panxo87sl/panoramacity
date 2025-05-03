import CardEvent from "./CardEvent";
const ItemListContainer = (props) => {
  const { textoBienvenida } = props;
  const eventos = [
    {
      key: 1,
      imagen:
        "https://static.ptocdn.net/images/eventos/wal243_calugalistado.jpg",
      nombre: "Los Bunkers - Gira Acustica",
      productora: "La Oreja",
      lugar: "Movistar Arena - Santiago",
      fecha: "8 de Noviembre 2025",
      enlace: "https://www.puntoticket.com/los-bunkers",
    },
    {
      key: 2,
      imagen:
        "https://cdn.getcrowder.com/images/60149882-50c9-4abf-bc97-6ee13b4b1e33-landing-limpio-1920x720-web-linkinpark.jpg",
      nombre: "Linkin Park",
      productora: "DG Medios",
      lugar: "Estadio Nacional - Santiago",
      fecha: "2 de Noviembre 2025",
      enlace:
        "https://www.ticketmaster.cl/event/linkin-park-from-zero-world-tour-chile-2025",
    },
  ];
  return (
    <main>
      <h2>{textoBienvenida}</h2>
      <section className="event-list" id="lista-eventos">
        {eventos.map((evento) => (
          <CardEvent
            key={evento.key}
            imagen={evento.imagen}
            nombre={evento.nombre}
            productora={evento.productora}
            lugar={evento.lugar}
            fecha={evento.fecha}
            enlace={evento.enlace}
          />
        ))}
      </section>
    </main>
  );
};

export default ItemListContainer;
