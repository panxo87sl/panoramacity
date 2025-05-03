import "./App.css";
import NavBar from "./components/NavBar";
import ItemContainer from "./components/ItemContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemContainer texto="Bienvenido a Panorama City" />
      <Footer />
    </>
  );
}

export default App;
