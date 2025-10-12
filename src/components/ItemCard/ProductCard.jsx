import './ProductCard.css'

export const ProductCard = ({product}) => {
    return (
        <div className="product-card-container">
            <div className="prod-card-img-container">
                <img src={product.imageUrl} alt="" />
            </div>

            <div className="prod-card-description-container">
                <h2>{product.description}</h2>
                <span>u$s {product.price}</span>
            </div>
        </div>
    )
}
export default ProductCard