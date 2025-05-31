import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import ErrorPath from "./components/ErrorPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer textoBienvenida="Bienvenido a Panorama City" />
          }
        />
        <Route
          path="/categoria/:idCategoria"
          element={<ItemListContainer textoBienvenida="Aqui encontrarás " />}
        />
        <Route path="/evento/:idEvento" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
