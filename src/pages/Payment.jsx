import { useParams } from "react-router-dom";
import QRCodeGenerator from "./QRCodeGenerator";
import { useEffect, useState } from "react";

function Payment() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State to store the fetched product

  useEffect(() => {
    const getPrice = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await response.json(); // Await the JSON parsing
        const selectedProduct = data.find((item) => item.id === parseInt(id)); // Use find instead of filter for a single item
        
        if (selectedProduct) {
          setProduct(selectedProduct); // Set the product in state
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    
    getPrice();
  }, [id]);

  return (
    <div>
      <h1>Payment Page</h1>
      {product ? (
        <div>
          <h2>Product Name: {product.title}</h2>
          <p>Price: ${product.price}</p>
          <QRCodeGenerator price={product.price} /> {/* Pass the price to QRCodeGenerator */}
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default Payment;
