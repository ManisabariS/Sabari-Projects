import { useNavigate } from "react-router-dom";
import "./css/Services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="btn-container-main">
        <button onClick={() => navigate("weather")}>Weather</button>
        <button onClick={() => navigate("bmi")}>BMI Calc</button>
        <button onClick={() => navigate("currencyConverter")}>Converter</button>
        <button onClick={() => navigate("digitalClock")}>Clock</button>
        <button onClick={() => navigate("password-generator")}>
          Strong Password
        </button>
      </div>
    </div>
  );
}

export default Services;
