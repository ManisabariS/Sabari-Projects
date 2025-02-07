import "./css/PasswordGenerator.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordGenerator() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [all, setAll] = useState(true);
  const [copied, setCopied] = useState(false); // State to show copy success message

  // Function to generate a password
  const generatePassword = () => {
    let chars = "";
    if (all || uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (all || lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (all || numbers) chars += "0123456789";
    if (all || symbols) chars += "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    if (chars.length === 0) {
      setPassword("Select options!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(newPassword);
    setCopied(false); // Reset copy state
  };

  // Function to copy password
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      console.log(navigator);
      setCopied(true); // Show copied message
      setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
    }
  };

  return (
    <>
      <div className="main">
        <div>
          <div className="back-btn-div">
            <button onClick={() => navigate("/services")}>Back</button>
          </div>
          <div className="main-container">
            <h1>Strong Password Generator</h1>
            <div className="digit-div">
              <label htmlFor="digit">Enter Password Length: </label>
              <input
                id="digit"
                type="number"
                value={length}
                min="4"
                max="32"
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            <div className="checkbox-div">
              <div className="uppercase-div">
                <input
                  id="uppercase"
                  type="checkbox"
                  checked={uppercase}
                  onChange={() => setUppercase(!uppercase)}
                />
                <label htmlFor="uppercase">Upper Case</label>
              </div>
              <div className="lowercase-div">
                <input
                  id="lowercase"
                  type="checkbox"
                  checked={lowercase}
                  onChange={() => setLowercase(!lowercase)}
                />
                <label htmlFor="lowercase">Lower Case</label>
              </div>
              <div className="number-div">
                <input
                  id="number"
                  type="checkbox"
                  checked={numbers}
                  onChange={() => setNumbers(!numbers)}
                />
                <label htmlFor="number">Number</label>
              </div>
              <div className="symbol-div">
                <input
                  id="symbol"
                  type="checkbox"
                  checked={symbols}
                  onChange={() => setSymbols(!symbols)}
                />
                <label htmlFor="symbol">Symbol</label>
              </div>
              <div className="all-div">
                <input
                  id="all"
                  type="checkbox"
                  checked={all}
                  onChange={() => setAll(!all)}
                />
                <label htmlFor="all">All</label>
              </div>
            </div>
            <div className="password-div">
              <label htmlFor="password">Generated Password: </label>
              <input id="password" type="text" value={password} readOnly />
              <div>
                <button onClick={generatePassword}>Generate</button>
                <button onClick={copyToClipboard}>Copy</button>
              </div>
              {copied && (
                <p className="copy-message">✅ Copied to clipboard!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
