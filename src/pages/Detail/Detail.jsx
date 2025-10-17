import { ProductDetailContainer } from '../../containers/ProductDetailContainer/ProductDetailContainer';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import './Detail.css';

export const Detail = () => {
    return (
        <MainLayout>
            <ProductDetailContainer />
        </MainLayout>
    );
}
export default Detail;