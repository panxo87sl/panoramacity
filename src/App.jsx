import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
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
        <Route path="*" element={<ErrorPath />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
