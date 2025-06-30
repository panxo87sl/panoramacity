import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventoDetail from "./EventoDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [Loading, setLoading] = useState();
  const [data, setData] = useState();
  const { idEvento } = useParams();
  const [invalidDoc, setInvalidDoc] = useState(false);

  //Firebase
  useEffect(() => {
    setLoading(true);
    const eventosCollection = collection(db, "eventos");
    //pedir datos
    const docUnique = doc(eventosCollection, idEvento);
    getDoc(docUnique)
      .then((response) => {
        if (response.exists()) {
          setData({ ...response.data(), id: response.id });
        } else {
          setInvalidDoc(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setInvalidDoc(true);
      })
      .finally(() => setLoading(false));
  }, []);
  return <div>{Loading ? <p>Cargando evento...</p> : invalidDoc ? <p>No hay información para este evento</p> : <EventoDetail detalleEvento={data} />}</div>;

  // useEffect(() => {
  //   getOneProduct(idEvento)
  //     .then((response) => setArrEvento(response))
  //     .catch((error) => console.log(error));
  // }, []);
};

export default ItemDetailContainer;
