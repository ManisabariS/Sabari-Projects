import { Link } from "react-router-dom";
import './css/NotFound.css'
function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="go-home-btn">Go to Home</Link>
    </div>
  );
}

export default NotFound;
