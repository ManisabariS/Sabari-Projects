import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Bmi.css';

function Bmi() {
  const navigate = useNavigate();
  const [heightState, setHeightState] = useState(localStorage.getItem('height') || '');
  const [weightState, setWeightState] = useState(localStorage.getItem('weight') || '');
  const [bmiValueState, setBmiValueState] = useState(0);
  const [bmiDetailsState, setBmiDetailsState] = useState('');
  const [bmiQuoteState, setBmiQuoteState] = useState('');
  const [bmiNameState, setBmiNameState] = useState('');
  const [bmiObject, setBmiObject] = useState({
    underWeight: {
      name:'UNDER WEIGHT',
      valueFrom: 0,
      valueTo: 18.5,
      quote: '🌱 Your body deserves nourishment, just like your soul deserves love. Take care of yourself.',
      details: 'Risk of malnutrition, weak immunity, and bone issues.'
    },
    normalWeight: {
      name:'NORMAL WEIGHT',
      valueFrom: 18.5,
      valueTo: 24.9,
      quote: '💪 Balance is the key to a healthy life. Keep moving forward, stay strong, and embrace wellness.',
      details: 'Healthy weight with minimal risks.'
    },
    overWeight: {
      name:'OVER WEIGHT',
      valueFrom: 25.0,
      valueTo: 29.9,
      quote: '🔥 Every small step counts. Progress is progress, no matter how slow. Keep going!',
      details: 'Higher risk of diabetes, heart disease, and hypertension.'
    },
    obesity1: {
      name:'OBESITY - 1',
      valueFrom: 30.0,
      valueTo: 34.9,
      quote: '🌟 Your health is an investment, not an expense. Love your body, fuel it well, and stay strong!',
      details: 'Increased risk of severe health issues like heart disease, stroke, and joint problems.'
    },
    obesity2: {
      name:'OBESITY - 2',
      valueFrom: 35.0,
      valueTo: 39.9,
      quote: '🌟 Your health is an investment, not an expense. Love your body, fuel it well, and stay strong!',
      details: 'Increased risk of severe health issues like heart disease, stroke, and joint problems.'
    },
    extremeObesity: {
      name:'EXTREME OBESITY',
      valueFrom: 40,
      valueTo: 100,
      quote: '🌟 Your health is an investment, not an expense. Love your body, fuel it well, and stay strong!',
      details: 'Increased risk of severe health issues like heart disease, stroke, and joint problems.'
    },
    default: {
      name:'',
      valueFrom: 0,
      valueTo: 0,
      quote: '',
      details: ''
    }
  });

  useEffect(() => {
    setQuote();
  }, [bmiValueState]);

  useEffect(() => {
    calculate();
  }, [bmiValueState]);

  function calculate() {
    let bmi = 0;
    if (heightState > 0 && weightState > 0) {
      bmi = (weightState / ((heightState / 100) * (heightState / 100))).toFixed(2);
      setBmiValueState(bmi);
      setQuote();
    }
  }

  function setQuote() {
    let category = '';

    if (bmiValueState < 18.5) {
      category = 'underWeight';
    } else if (bmiValueState >= 18.5 && bmiValueState < 24.9) {
      category = 'normalWeight';
    } else if (bmiValueState >= 25.0 && bmiValueState < 29.9) {
      category = 'overWeight';
    } else if (bmiValueState >= 30.0 && bmiValueState < 34.9) {
      category = 'obesity1';
    } else if (bmiValueState >= 35.0 && bmiValueState < 39.9) {
      category = 'obesity2';
    } else if (bmiValueState >= 40) {
      category = 'extremeObesity';
    }
    else{
      setBmiNameState('');
      setBmiDetailsState( '');
      setBmiQuoteState( '');
    }
    setBmiNameState(bmiObject[category]?.name || '');
    setBmiDetailsState(bmiObject[category]?.details || '');
    setBmiQuoteState(bmiObject[category]?.quote || '');
    
  }
  function reset(){
    setHeightState('')
    setWeightState('')
    setBmiValueState('')
    setBmiDetailsState('')
    setBmiNameState('')
    setQuote('')
  }

  // Save data to localStorage whenever the values change
  // useEffect(() => {
  //   localStorage.setItem('height', heightState);
  //   localStorage.setItem('weight', weightState);
  // }, [heightState, weightState]);

  return (
    <div className='main'>
      <div className='back-btn'>
        <button style={{ padding: '10px 20px' }} className="go-back button" onClick={() => navigate("/services")}>
          Back
        </button>
      </div>
      <div className="bmi-container">
        <div className="bmi-heading">
          <h2>BMI CALCULATOR</h2>
        </div>
        
        <div className="bmi-inputs">
          <label htmlFor="weight">Weight (in kg): </label>
          <input
            id="weight"
            type="number"
            value={weightState}
            onChange={(e) => setWeightState(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>

        <div className="bmi-inputs">
          <label htmlFor="height">Height (in cm): </label>
          <input
            id="height"
            type="number"
            step="0.01"
            value={heightState}
            onChange={(e) => setHeightState(e.target.value)}
            placeholder="Enter your height"
          />
        </div>

        {bmiValueState !==null &&<div className="bmi-result">
          <p>BMI: <span style={{ color: 'blue' }}>{bmiValueState}</span></p>
          <p><span style={{ color: 'red' }}>{bmiNameState}</span></p>
          <p>{bmiQuoteState}</p>
        </div>}

        <div className="bmi-btn">
          <button onClick={calculate}>Calculate BMI</button>
        </div>
        <div className="bmi-btn" >
          <button style={{backgroundColor:'red', marginTop:'10px'}} onClick={reset}>Reset</button>
        </div>

        {bmiValueState !==null &&<div className="bmi-details">
          <p><strong>Details:</strong> {bmiDetailsState}</p>
        </div>}
        <div className="footer">
            <footer>Developed by DevLogics</footer>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
