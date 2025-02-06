import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./css/ProductCard.css";

function ProductCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="product-card-container">
      {data.map(({ id, image, title, description, price, rating, category }) => (
        <div key={id} className="product-card">
          <img src={image} alt={title} className="product-image" loading="lazy" />
          <div className="product-details">
            <h2 className="product-title" title={title}>{title}</h2>
            <p className="product-category">{category}</p>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <div className="product-rating">
              {"★".repeat(Math.round(rating.rate)) + "☆".repeat(5 - Math.round(rating.rate))}
              <span>({rating.count} reviews)</span>
            </div>
            <button className="product-btn" onClick={() => navigate(`/product/${id}`)}>
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ProductCard;
