import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = (props) => {
  const { textoBienvenida } = props;
  const [data, setData] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true);

  //Firebase
  useEffect(() => {
    setLoading(true);
    //conexion con la colección basica
    // const eventosCollection = collection(db, "eventos");
    //
    //opcion if que no funciono, con query incluida
    // if (idCategoria) {
    //   setEventosCollection(query(collection(db, "eventos")), where("categoria", "==", idCategoria));
    // } else {
    //   setEventosCollection(collection(db, "eventos"));
    // }
    //Opcion if resumido, funcional
    const eventosCollection = idCategoria ? query(collection(db, "eventos"), where("categoria", "==", idCategoria)) : collection(db, "eventos");
    //pedir datos
    getDocs(eventosCollection)
      .then((response) => {
        const list = response.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setData(list); //Se guarda la colección que se va a mostrar

        //Filtrar lista utilizando filter
        // if (idCategoria) {
        //   setData(list.filter((evento) => evento.categoria === idCategoria));
        // } else {
        //   setData(list);
        // }
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
