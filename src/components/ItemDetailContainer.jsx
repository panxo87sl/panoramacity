import { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncService";
import { useParams } from "react-router-dom";
import EventoDetail from "./EventoDetail";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [Loading, setLoading] = useState();
  const [data, setData] = useState();
  const { idEvento } = useParams();
  const [invalidDoc, setInvalidDoc] = useState(false);

  //Firebase
  useEffect(() => {
    setLoading(true);
    console.log("id" + idEvento);
    // //conexión con colleción
    // const eventosCollection = collection(db, "eventos");
    // //crear una referencia al documento que necesitamos con su ID
    // const docUnique = doc(eventosCollection, idEvento);
    // getDoc(docUnique)
    //   .then((response) => {
    //     if (response.data()) {
    //       setData({ ...response.data(), id: response.idEvento });
    //     } else {
    //       setInvalidDoc(true);
    //     }
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));

    const eventosCollection = query(collection(db, "eventos"), where("id", "==", idEvento));
    //pedir datos
    getDocs(eventosCollection).then((response) => {
      const list = response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(list);
      setData(list);
    });
  }, []);
  return <div>{Loading ? <p>Cargando evento...</p> : invalidDoc ? <p>No hay información para este evento</p> : <EventoDetail detalleEvento={data} />}</div>;

  // useEffect(() => {
  //   getOneProduct(idEvento)
  //     .then((response) => setArrEvento(response))
  //     .catch((error) => console.log(error));
  // }, []);
};

export default ItemDetailContainer;
