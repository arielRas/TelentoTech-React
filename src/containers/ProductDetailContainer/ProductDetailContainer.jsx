import { useEffect, useState } from "react";
import { getProductById } from "../../Services/ProductService";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import "./ProductDetailContainer.css";

export const ProductDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const handleFetch = async (id) => {
        const data = await getProductById(id);
        setProduct(data);
    }

    useEffect(() => {
        handleFetch(id);
    }, []);

    return (
        <>
            {product
                ? (<ProductDetail product={product} />)
                : (<span>Cargando...</span>)
            }
        </>
    );
}
export default ProductDetailContainer;