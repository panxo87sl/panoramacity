import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-right">
          <picture>
            <NavLink to="/">
              <img src="https://i.vgy.me/Tu1fWo.png" alt="Tu1fWo.png" />
            </NavLink>
          </picture>
        </div>
        <div className="nav-left">
          {/* <input
            type="text"
            placeholder="Buscar nombre o lugar..."
            id="buscar"
          /> */}
          <div className="item-navbar">
            <NavLink to="/categoria/conciertos">
              <p>conciertos</p>
            </NavLink>
          </div>
          <div className="item-navbar">
            <NavLink to="/categoria/deportes">
              <p>deportes</p>
            </NavLink>
          </div>
          <div className="item-navbar">
            <NavLink to="/categoria/comedia">
              <p>comedia</p>
            </NavLink>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
