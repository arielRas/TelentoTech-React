import {useCartContext} from "../../contexts/CartContext/useCartContext";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    const {countItemsCart} = useCartContext();

    return (
        <header>
            <div className="header-logo-container">
                <Link to="/"><img src="/img/common/logo.png" alt="" /></Link>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Nosotros</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                </ul>
            </nav>

            <div className="header-aux-container">
                <div className="header-login-button-container">
                    <Link to="/">
                        <div className="link-button ">Login</div>
                    </Link>
                </div>
                <div className="header-cart-button-container">
                    <Link to="/cart">
                        <div className="link-button ">
                            <span>Carrito</span>
                            { countItemsCart() > 0 &&
                                <span className="cart-item-counter">{countItemsCart()}</span>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;