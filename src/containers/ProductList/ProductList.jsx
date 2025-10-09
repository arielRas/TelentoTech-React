import { ProductCard } from "../../components/ItemCard/ProductCard"
import "./Productlist.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Services/ProductService"

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
        <div className="product-list-container">
            {products.map(product =>                 
                <ProductCard key={product.id} product={product}/>
            )}
        </div>        
    );

}
export default ProductList