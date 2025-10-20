import CartContextProvider from "../contexts/CartContext/CartContextProvider";

const ContextsProvider = ({ children }) => {
    return(
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
};
export default ContextsProvider;