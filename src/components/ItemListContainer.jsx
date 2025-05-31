import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { textoBienvenida } = props;
  const [data, setData] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((respuesta) => {
        if (idCategoria) {
          setData(
            respuesta.filter((evento) => evento.categoria === idCategoria)
          );
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [idCategoria]);
  //
  return (
    <main>
      <h2>
        {textoBienvenida} {idCategoria}
      </h2>
      {loading ? (
        <p className="loader">Cargando eventos...</p>
      ) : (
        <ItemList eventos={data} />
      )}
    </main>
  );
};

export default ItemListContainer;
