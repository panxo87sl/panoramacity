import React from "react";
import { Link } from "react-router-dom";

const ErrorPath = () => {
  return (
    <main>
      <h2>Aun no existe este evento</h2>
      <Link className="boton-home" to="/">
        <h2>Inicio</h2>
      </Link>
    </main>
  );
};

export default ErrorPath;
