import { NavLink, useNavigate } from "react-router-dom";
import "./css/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div style={{textAlign:'center'}} className="company-name-div"><h2 style={{fontSize:'2.8rem'}} className="company-name">DevLogics</h2></div>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
      <div>
      <button 
      className="signup-btn" 
      style={{backgroundColor:'#ff9800'}}
      onClick={() => navigate('/login', { replace: true })}>Login</button>
      {/* Sign Up Button */}
      <button 
        className="signup-btn" 
        onClick={() => navigate('/signup', { replace: true })}
      >
        Sign Up
      </button>
      </div>
    </nav>
  );
}

export default NavBar;
