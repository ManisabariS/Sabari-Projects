import { Link } from "react-router-dom";
import "./css/NotFound.css";

function NotFound() {
  return (
    <div className="main">
      <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="go-home-btn">Go to Home</Link>
    </div>
    </div>
  );
}

export default NotFound;
