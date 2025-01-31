import { useLoaderData } from 'react-router-dom';
import './css/Products.css';
import ProductCard from '../components/ProductCard';

function Products() {
  const products = useLoaderData(); // Fetch products data using the loader
  return (
    <div>
      <h1>Products</h1>
      <div className='product-card-container'>
        <ProductCard data={products} />
      </div>
    </div>
  );
}

export default Products;
