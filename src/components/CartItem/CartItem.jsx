import "./CartItem.css";

export const CartItem = ({ item }) => {
    return (
        <div className="cartItem">
            <div className="item-img-container">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="item-info-container">
                <span>{item.description}</span>
                <button>Eliminar</button>
            </div>
            <div className="item-quantity-container">
                <div className="border-buttons">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                </div>
            </div>
            <div className="item-subtotal-container">
                <span>usd {item.subtotal.toFixed(2)}</span>
            </div>

        </div>
    );
};
export default CartItem;