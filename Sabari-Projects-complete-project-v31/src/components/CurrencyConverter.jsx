import { useEffect, useState } from 'react';
import './css/CurrencyConverter.css'


function CurrencyConverter() {
  const [answerState, setAnswerState] = useState(0)
  const [apiDataState, setApiDataState] = useState({})
  const [fromCountryState, setFromCountryState] = useState('USD')
  const [toCountryState, setToCountryState] = useState('INR')
  const [urlState, setUrlState] = useState('https://api.exchangerate-api.com/v4/latest/USD')

  useEffect(() => {
    fetchApi()
  }, [urlState])

  async function fetchApi() {
    console.log('url', urlState)
    const res = await fetch(urlState)
    const data = await res.json()
    setApiDataState(data)
  }

  function handleChangeSelect() {

  }
  return (
    <>
      {console.log(apiDataState)}
      <div className='center'>
        <div className="main-container">

          <div className="input-main-container">
            <div className='select-div'>
              <select>
                <option value="USD">United States (USD)</option>
                <option value="EUR">EuroZone (EUR)</option>
                <option value="JPY">Japan (JPY)</option>
                <option value="GBP">United Kingdom (GBP)</option>
                <option value="AUD">Australia (AUD)</option>
                <option value="CAD">Canada (CAD)</option>
                <option value="CNY">China (CNY)</option>
                <option value="INR">India (INR)</option>
                <option value="CHF">Switzerland (CHF)</option>
                <option value="SGD">Singapore (SGD)</option>
              </select>
            </div>

            <div className='input-div'>
              <input placeholder='Enter a Number' type="text" />
            </div>

            <div className='select-div'>
              <select onChange={handleChangeSelect}>
                <option value="USD">United States (USD)</option>
                <option value="EUR">EuroZone (EUR)</option>
                <option value="JPY">Japan (JPY)</option>
                <option value="GBP">United Kingdom (GBP)</option>
                <option value="AUD">Australia (AUD)</option>
                <option value="CAD">Canada (CAD)</option>
                <option value="CNY">China (CNY)</option>
                <option value="INR">India (INR)</option>
                <option value="CHF">Switzerland (CHF)</option>
                <option value="SGD">Singapore (SGD)</option>
              </select>
            </div>
          </div>
          <div >
            <div>
              <h2>Result = {answerState}</h2>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CurrencyConverter
