import { NavLink, useNavigate } from "react-router-dom";
import "./css/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <h2>DevLogics</h2>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
      <button onClick={() => navigate('/login', { replace: true })}>Login</button>
    </nav>
  );
}

export default NavBar;
