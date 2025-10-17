import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';

export const CartContextProvider = ({ children }) => {

    const getCartFromLocalStorage = () => {
        const data = localStorage.getItem('cart');
        console.log('Obteniendo carrito del localStorage');
        return data ? JSON.parse(data) : [];
    }

    const [cart, setCart] = useState(getCartFromLocalStorage);

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Carrito guardado en localStorage', cart);
    }

    const getTotalAmount = () => {
        return cart.reduce((subtotal, item) => subtotal += item.subtotal, 0);
    };

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

    const itemQuantityIncrease = (id) => {
        const updatedCart = cart.map(prod =>
            prod.id === id
                ? {
                    ...prod,
                    quantity: prod.quantity + 1,
                    subtotal: (prod.quantity + 1) * prod.price
                }
                : prod
        );

        setCart(updatedCart);
    }

    const itemQuantityDecrease = (id) => {
        const updatedCart = cart.map(prod =>
            prod.id === id && prod.quantity > 1
                ? {
                    ...prod,
                    quantity: prod.quantity - 1,
                    subtotal: (prod.quantity - 1) * prod.price
                }
                : prod
        );

        setCart(updatedCart);
    }

    useEffect(() =>
        saveCartToLocalStorage(cart), [cart]);

    const values = {
        cart,
        addToCart,
        deleteItem,
        countItemsCart,
        getTotalAmount,
        itemQuantityIncrease,
        itemQuantityDecrease
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
export default CartContextProvider;