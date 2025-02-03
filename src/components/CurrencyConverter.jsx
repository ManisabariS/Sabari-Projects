import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/CurrencyConverter.css";

function CurrencyConverter() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await res.json();
      setExchangeRates(data.rates);
    } catch (err) {
      setError(`Failed to fetch exchange rates. => ${err}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    calculateConversion();
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const calculateConversion = () => {
    if (exchangeRates[toCurrency]) {
      setConvertedAmount((amount * exchangeRates[toCurrency]).toFixed(2));
    }
  };

  return (
    <>
      <div className="center">
      <div>
      <button style={{padding:'10px 20px'}} className="back-btn" onClick={() => navigate("/services")}>
             Back
          </button>
      </div>
        <div className="container">
          

          <div className="converter-box">
            <h2>Currency Converter</h2>

            {error && <p className="error-msg">{error}</p>}

            <div className="input-group">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1"
              />
              <select
                onChange={(e) => setFromCurrency(e.target.value)}
                value={fromCurrency}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <p className="equals">=</p>

            <div className="input-group">
              <input type="text" value={convertedAmount} readOnly />
              <select
                onChange={(e) => setToCurrency(e.target.value)}
                value={toCurrency}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="info">
              <h3>1 {fromCurrency} is equal to {exchangeRates[toCurrency]}{toCurrency}</h3>
            </div>
            <div className="footer">
            <footer>Developed by DevLogics</footer>
          </div>    
            {loading && (
              <p className="loading-text">Fetching exchange rates...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
