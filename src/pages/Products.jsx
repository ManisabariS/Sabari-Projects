import { useLoaderData } from 'react-router-dom';
import './css/Products.css';
import ProductCard from '../components/ProductCard';

function Products() {
  const products = useLoaderData(); // Fetch products data using the loader
  return (
    <>
     
      <h1 className='h1'>PRODUCTS</h1>
      <div  >
        <ProductCard data={products} />
      </div>
    </>
  );
}

export default Products;
