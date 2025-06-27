import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventoDetail from "./EventoDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [Loading, setLoading] = useState();
  const [data, setData] = useState();
  const { idEvento } = useParams();
  const [invalidDoc, setInvalidDoc] = useState();

  //Firebase
  useEffect(() => {
    setLoading(true);
    //conexión con colleción
    const eventosCollection = collection(db, "eventos");
    //crear una referencia al documento que necesitamos con su ID
    const docUnique = doc(eventosCollection, idEvento);
    getDoc(docUnique)
      .then((response) => {
        if (response.data()) {
          setData({ ...response.data(), id: response.idEvento });
        } else {
          setInvalidDoc(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   getOneProduct(idEvento)
  //     .then((response) => setArrEvento(response))
  //     .catch((error) => console.log(error));
  // }, []);

  return <div>{Loading ? <p>Cargando evento...</p> : invalidDoc ? <p>No hay información para este evento</p> : <EventoDetail detalleEvento={data} />}</div>;
};

export default ItemDetailContainer;
