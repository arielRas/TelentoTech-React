import { useCartContext } from "../../contexts/CartContext/useCartContext";
import "./CartItem.css";

export const CartItem = ({ item }) => {
    const {itemQuantityIncrease, itemQuantityDecrease, deleteItem} = useCartContext();

    return (
        <div className="cartItem">
            <div className="item-img-container">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="item-info-container">
                <span>{item.description}</span>
                <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
            <div className="item-quantity-container">
                <div className="border-buttons">
                    <button onClick={() => itemQuantityDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => itemQuantityIncrease(item.id)}>+</button>
                </div>
            </div>
            <div className="item-subtotal-container">
                <span>u$s {item.subtotal.toFixed(2)}</span>
            </div>

        </div>
    );
};
export default CartItem;