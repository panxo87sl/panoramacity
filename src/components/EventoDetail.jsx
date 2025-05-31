const EventoDetail = (props) => {
  const { objEvento } = props;
  return (
    <main>
      <h2>{}</h2>
      <section className="event-list" id="lista-eventos"></section>
    </main>
  );
};

export default EventoDetail;
