import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!cart.some(prod => prod.id === product.id)) {
            const newProduct = { ...product, quantity: 1, subtotal: product.price };
            setCart((prevCart) => [...prevCart, newProduct]);
        }
        else {
            const updatedCart = cart.map(prod =>
                prod.id === product.id
                    ? {
                        ...prod,
                        quantity: prod.quantity + 1,
                        subtotal: prod.subtotal + product.price
                    }
                    : prod
            );
            setCart(updatedCart);
        }
    };

    const deleteItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const countItemsCart = () => {
        return cart.length;
    };

    const getTotalAmount = () => {
        return cart.reduce((subtotal, item) => subtotal += item.subtotal, 0);
    };

    useEffect(() => {
        console.log('Carrito actualizado/n',cart);
    }, [cart]);

    const values = { cart, addToCart, deleteItem, countItemsCart, getTotalAmount };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
export default CartContextProvider;