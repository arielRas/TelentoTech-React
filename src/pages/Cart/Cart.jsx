import CartItemContainer from '../../containers/CartItemContainer/CartItemContainer';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import './Cart.css';

const Cart = () => {
    return (
        <MainLayout>
            <h1 className='cart-page-h1'>Carrito de compras</h1>
            <CartItemContainer />
        </MainLayout>
    );
}
export default Cart;