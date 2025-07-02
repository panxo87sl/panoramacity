import { useState } from "react";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [stockReal, setStockReal] = useState(stock);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      setStockReal(stockReal - 1);
      console.log(stockReal);
    }
  };

  const disminuir = () => {
    if (cantidad >= 1) {
      setCantidad(cantidad - 1);
      setStockReal(stockReal + 1);
      console.log(stockReal);
    }
  };

  const handleAdd = () => {
    if (stock >= 0) {
      onAdd(cantidad);
      console.log(stockReal);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button onClick={disminuir}>−</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
      {stockReal > 0 ? (
        <button className="event-like-link" onClick={handleAdd}>
          Agregar al carrito
        </button>
      ) : (
        <span className="item-count-text">Producto sin stock</span>
      )}
    </div>
  );
};

export default ItemCount;
