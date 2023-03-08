import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link className="header__logo-link" to="/">
          e-commerce
        </Link>

        <Link className="header__link" to="/user/login">
          <button className="icon">
            <i className="bx bx-user"></i>
          </button>
        </Link>

        <Link className="header__link" to="/purchases">
          <button className="icon">
            <i className="bx bx-archive"></i>
          </button>
        </Link>

        <Link className="header__link" to="/cart">
          <button className="icon">
            <i className="bx bx-cart-download"></i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
