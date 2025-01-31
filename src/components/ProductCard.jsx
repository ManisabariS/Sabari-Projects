import PropTypes from "prop-types";
import "./css/ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className="product-card-container">
      {data.map((item) => {
        const { id, image, title, description, price, rating, category } = item;
        return (
          <div key={id} className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-details">
              <h2 className="product-title">{title}</h2>
              <p className="product-category">{category}</p>
              <p className="product-description">{description}</p>
              <p className="product-price">${price.toFixed(2)}</p>
              <div className="product-rating">
                {"★".repeat(Math.round(rating.rate)) +
                  "☆".repeat(5 - Math.round(rating.rate))}
                <span>({rating.count} reviews)</span>
              </div>
              <button onClick={() => navigate(`${id}`)}>Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCard;
