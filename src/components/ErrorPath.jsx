import React from "react";
import { Link } from "react-router-dom";

const ErrorPath = () => {
  return (
    <main>
      <h2>Aun no existe este evento</h2>
      <Link to="/" className="cart-body-text">
        Volver al inicio
      </Link>
    </main>
  );
};

export default ErrorPath;
