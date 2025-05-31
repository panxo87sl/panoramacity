import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { textoBienvenida } = props;
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          setData(respuesta.filter((evento) => evento.category === categoryId));
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryId]);
  //
  return (
    <main>
      <h2>{textoBienvenida}</h2>
      {loading ? (
        <p className="loader">Cargando eventos...</p>
      ) : (
        <ItemList eventos={data} />
      )}
    </main>
  );
};

export default ItemListContainer;
