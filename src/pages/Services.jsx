// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Weather from "../components/Weather";
// import CurrencyConverter from "../components/CurrencyConverter";
import './css/Services.css'
function Services() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Our Services</h1>

      <div className="btn-container-main">
        <div>
          <button
            onClick={() => {
              navigate("weather");
            }}
          >
            Weather
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("bmi");
            }}
          >
            BMI Calc
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("currencyconverter");
            }}
          >
            Converter
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
