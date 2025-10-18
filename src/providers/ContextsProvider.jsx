import CartContextProvider from "../contexts/CartContext/CartContextProvider";

export const ContextsProvider = ({ children }) => {
    return(
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
};
export default ContextsProvider;