import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="header-logo-container">
                <img src="../public/img/common/logo.png" alt="" />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <div className="header-aux-container">
                <div className="header-login-button-container">
                    <button>Login</button>
                </div>
                <div className="header-cart-container">
                    <button>Carrito</button>
                </div>
            </div>
        </header>
    );
};
export default Header;