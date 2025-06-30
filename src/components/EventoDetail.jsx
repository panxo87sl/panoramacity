const EventoDetail = (props) => {
  const { detalleEvento } = props;
  if (!detalleEvento) return null;
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
        <a href={detalleEvento.enlace} target="_blank" className="event-info-link" id="enlace">
          Sitio Original
        </a>
      </section>
    </main>
  );
};

export default EventoDetail;
