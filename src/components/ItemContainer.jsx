const ItemContainer = (props) => {
  const { texto } = props;
  return (
    <main>
      <h2>{texto}</h2>
      <section className="event-list" id="lista-eventos"></section>
    </main>
  );
};

export default ItemContainer;
