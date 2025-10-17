import { useEffect } from "react";
import { useCartContext } from "../../contexts/CartContext/useCartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import './CartItemContainer.css';

export const CartItemContainer = () => {
    const { cart, getTotalAmount } = useCartContext();    

    return (
        <section className="cart-item-section">
            <div className="cart-item-container">
                {cart.length > 0
                    ? cart.map(item =>
                        <CartItem key={item.id} item={item} />
                    )
                    : <h2>No hay productos en el carrito</h2>
                }
            </div>
            <div className="purchase-summary-container">
                <span>TOTAL</span>
                <span>u$s {getTotalAmount().toFixed(2)}</span>
            </div>
        </section>
    );
}
export default CartItemContainer;
