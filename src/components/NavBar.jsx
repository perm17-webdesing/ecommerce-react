import CartWidget from "./CartWidget";
import logo from "../assets/img/logo-ecommerce.svg";

const NavBar = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
             <img className="logo-marca" src={logo} alt="Logo Ecommerce" />
              
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary text-white">
                🏁 Inicio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-secondary text-white">
                🏷️ Productos
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-secondary text-white">
                🤙 Contacto
                </a>
              </li>


            </ul>

            <div className="contenedor-cartwidget">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
