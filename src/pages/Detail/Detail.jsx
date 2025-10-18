import { ProductDetailContainer } from '../../containers/ProductDetailContainer/ProductDetailContainer';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import './Detail.css';

export const Detail = () => {
    return (
        <MainLayout>
            <h1 className="product-detail-container-h1">Detalle de producto</h1>
            <ProductDetailContainer />
        </MainLayout>
    );
}
export default Detail;