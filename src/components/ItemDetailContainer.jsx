import { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncService";
import { useParams } from "react-router-dom";
import EventoDetail from "./EventoDetail";

const ItemDetailContainer = () => {
  const [arrEvento, setArrEvento] = useState();
  const { idEvento } = useParams();

  useEffect(() => {
    getOneProduct(idEvento)
      .then((response) => setArrEvento(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {arrEvento ? (
        <EventoDetail detalleEvento={arrEvento} />
      ) : (
        <p>Cargando evento...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
