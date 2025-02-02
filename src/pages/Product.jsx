import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './css/Product.css'
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>
        Rating: {"★".repeat(Math.round(product.rating.rate)) + "☆".repeat(5 - Math.round(product.rating.rate))} ({product.rating.count} reviews)
      </p>
      <div className="button-container">
        <button className="button add-to-cart">Add to Cart</button>
        <button className="button buy-now" onClick={()=>navigate('payment')}>Buy Now</button>
    </div>
    </div>
  );
}

export default Product;
