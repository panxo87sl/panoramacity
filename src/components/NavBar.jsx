import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-right">
          <picture>
            <img src="https://i.vgy.me/Tu1fWo.png" alt="Tu1fWo.png" />
          </picture>
        </div>
        <div className="nav-left">
          <input
            type="text"
            placeholder="Buscar nombre o lugar..."
            id="buscar"
          />
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
