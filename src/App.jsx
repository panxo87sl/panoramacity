import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer textoBienvenida="Bienvenido a Panorama City" />
      <Footer />
    </>
  );
}

export default App;
