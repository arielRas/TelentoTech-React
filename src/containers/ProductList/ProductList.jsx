import { ProductCard } from "../../components/ItemCard/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/ProductService";
import "./Productlist.css";

export const ProductList = () => {
    const [products, setProducts] = useState([])

    const handleFetch = async () =>{
        const data = await getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        handleFetch();
    }, [])

    return(
        <section className="product-list-container">
            {products.map(product =>                 
                <ProductCard key={product.id} product={product}/>
            )}
        </section>        
    );

}
export default ProductList