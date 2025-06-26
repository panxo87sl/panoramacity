import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = (props) => {
  const { textoBienvenida } = props;
  const [data, setData] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true);

  //Firebase
  useEffect(() => {
    setLoading(true);
    //conexion con la colección
    const eventosCollection = collection(db, "eventos");
    //pedir datos
    getDocs(eventosCollection)
      .then((response) => {
        const list = response.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        if (idCategoria) {
          setData(list.filter((evento) => evento.categoria === idCategoria));
        } else {
          setData(list);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  // useEffect(() => {
  //   setLoading(true);
  //   getProducts()
  //     .then((respuesta) => {
  //       if (idCategoria) {
  //         setData(respuesta.filter((evento) => evento.categoria === idCategoria));
  //       } else {
  //         setData(respuesta);
  //       }
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, [idCategoria]);
  //
  return (
    <main>
      <h2>
        {textoBienvenida} {idCategoria}
      </h2>
      {loading ? <p className="loader">Cargando eventos...</p> : data.length <= 0 ? <p className="loader">Actualmente no hay eventos para esta categoria</p> : <ItemList eventos={data} />}
    </main>
  );
};

export default ItemListContainer;
