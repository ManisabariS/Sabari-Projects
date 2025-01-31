import searchIcon from "../assets/icons/search-icon.svg";
import clearIcon from "../assets/icons/clear-icon.svg";
import windIcon from "../assets/icons/wind-icon.svg";
import humidityIcon from "../assets/icons/humidity-icon.svg";

import sunIcon from "../assets/icons/sun-icon.svg";
import cloudIcon from "../assets/icons/cloud-icon.svg";
import drizzleIcon from "../assets/icons/drizzle-icon.svg";
import rainIcon from "../assets/icons/rain-icon.svg";
import snowIcon from "../assets/icons/snow-icon.svg";

import "./css/weather.css";
import { useEffect, useState } from "react";

function Weather() {
  const [apiData, setApiData] = useState({});
  const [tempState, setTempState] = useState(0);
  const [cityState, setCityState] = useState('');
  const [countryState, setCountryState] = useState('');
  const [latitudeState, setLatitudeState] = useState(0);
  const [longitudeState, setLongitudeState] = useState(0);
  const [humidityState, setHumidityState] = useState(0);
  const [windState, setWindState] = useState(0);
  const [pressureState, setPressureState] = useState(0);
  const [weatherDescriptionState, setWeatherDescriptionState] = useState('Normal');
  const [localApiKeyState, setLocalApiKeyState] = useState('');



  const [showSearchBtn, setShowSearchBtn] = useState(false);
  const [showUpdateApiKeyBtn, setShowUpdateApiKeyBtn] = useState(false);
  const [showUpdateApiKeyTextBox, setShowUpdateApiKeyTextBox] = useState(false);

  const [weatherState, setWeatherState] = useState('Clear');
  const [searchCityState, setSearchCityState] = useState('Chennai');
  const [apiKeyState, setApiKeyState] = useState('d461c48a80a0a5d671725a5117a7ceed');
  const [urlState, setUrlState] = useState('https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=d461c48a80a0a5d671725a5117a7ceed');

  useEffect(() => {
    fetchApi();
  }, [urlState]); // Fetch when the urlState changes

  const getWeatherImage = (main) => {
    switch (main) {
      case 'Clear':
        return sunIcon; // Sunny weather
      case 'Clouds':
      case 'Haze':
      case 'Mist':
      case 'Fog':
        return cloudIcon; // Cloudy or foggy weather
      case 'Rain':
      case 'Thunderstorm':
        return rainIcon; // Rain and thunderstorms
      case 'Drizzle':
        return drizzleIcon; // Light rain
      case 'Snow':
      case 'Sleet':
        return snowIcon; // Snowy weather
      default:
        return sunIcon; // Default to sun icon if no match
    }
};
  function localUpdateApiKey(e){
    let newKey =e.target.value;
    setLocalApiKeyState(newKey)
    setShowUpdateApiKeyBtn(!showUpdateApiKeyBtn)
  }
  function UpdateApikey(){
    setApiKeyState(localApiKeyState)
    console.log(localApiKeyState)
  }

  const changeCityInApi = (e) => {
    e.preventDefault(); // Prevent the page reload
    if (searchCityState.trim() === '') {
      alert('Please enter a valid city name');
      return;
    }
    setUrlState(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&units=metric&appid=${apiKeyState}`);
    console.log('City searched:', searchCityState);
  };

  const updateCityName = (e) => {
    const value = e.target.value;
    setSearchCityState(value); // Update the city name in state
    setShowSearchBtn(!showSearchBtn)
  };

  const clearInput = () => {
    setSearchCityState('');
  };

  function fetchApi() {
    fetch(urlState)
      .then(response => response.json())
      .then(data => {
        if (data.cod !== 200) {
          alert('City not found');
          console.log(`Check your API Key: ${apiKeyState} `)
          return;
        }
        console.log(data);
        setApiData(data);
        setTempState(data.main.temp);
        setCityState(data.name);
        setCountryState(data.sys.country);
        setLatitudeState(data.coord.lat);
        setLongitudeState(data.coord.lon);
        setHumidityState(data.main.humidity);
        setWindState(data.wind.speed);
        setWeatherState(data.weather[0]['main']);
        setWeatherDescriptionState(data.weather[0]['description'])
        setPressureState(data.main.pressure)
      })
      .catch(error => console.error("Error fetching weather data:", error));
  }

  return (
    <div className="weather-container-div">
      <div className="search-div">
        <span>
          <input
            type="text"
            placeholder="Enter city name"
            value={searchCityState}
            onChange={updateCityName}
          />
        </span>
        <span className="clear-icon" onClick={clearInput}>
          <img src={clearIcon} alt="Clear" height="24px" width="24px" />
        </span>
        <span className="search-icon">
          <a href="" onClick={changeCityInApi}>
            {showSearchBtn&&<img src={ searchIcon} alt="Search" height="24px" width="24px" />}
          </a>
        </span>
      </div>

      <div className="display-div">
        <div>
          <img src={getWeatherImage(weatherState)} alt="present weather image" />
        </div>
        <div>
          <h2>{tempState.toFixed(1)}°C <span style={{fontSize:"16px"}}>- {weatherDescriptionState}</span></h2>
        </div>
        <div className="city-state">
          <h1>{cityState}</h1>
        </div>
        <div style={{ margin: "0px" }}>
          <h4>{countryState}</h4>
        </div>
      </div>

      <div>
        <table>
          <tbody className="long-lat">
            <tr>
              <th>latitude</th>
            </tr>
            <tr>
              <th>{latitudeState.toFixed(2)}</th>
            </tr>
          </tbody>
          <tbody className="long-lat">
            <tr>
              <th>longitude</th>
            </tr>
            <tr>
              <th>{longitudeState.toFixed(2)}</th>
            </tr>
          </tbody>
          <tbody className="long-lat">
            <tr>
              <th>Pressure</th>
            </tr>
            <tr>
              <th>{pressureState}</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bottom-div">
        <table className="bottom">
          <tbody>
            <tr>
              <td className="left-icon">
                <img
                  src={humidityIcon}
                  alt="humidity image"
                  height="24px"
                  width="24px"
                />
              </td>
            </tr>
            <tr>
              <th>{humidityState}%</th>
            </tr>
            <tr>
              <th>Humidity</th>
            </tr>
          </tbody>
          <tbody className="center-items">
            <tr>
              <th></th>
              <td className="right-icon">
                <img
                  src={windIcon}
                  alt="wind image"
                  height="24px"
                  width="24px"
                />
              </td>
            </tr>
            <tr>
              <th>{`${(windState * 3.6).toFixed(1)} Km/hr`}</th>
            </tr>
            <tr>
              <th>Wind</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
          <footer>Developed by DevLogics</footer>
      </div >
          <button onClick={()=>setShowUpdateApiKeyTextBox(!showUpdateApiKeyTextBox)} >Update Api Key</button>
          <div className="center-horzontally">
          {showUpdateApiKeyTextBox && (<input type="text" className="custom-textbox" onChange={localUpdateApiKey}  placeholder="Enter 32 characters..."/>)}
            {showUpdateApiKeyBtn&&<button onClick={()=>UpdateApikey()}>Update</button>}
          </div>
    </div>
  );
}

export default Weather;

























































// import searchIcon from "../assets/icons/search-icon.svg";
// import clearIcon from "../assets/icons/clear-icon.svg";
// import windIcon from "../assets/icons/wind-icon.svg";
// import humidityIcon from "../assets/icons/humidity-icon.svg";

// import sunIcon from "../assets/icons/sun-icon.svg";
// import cloudIcon from "../assets/icons/cloud-icon.svg";
// import drizzleIcon from "../assets/icons/drizzle-icon.svg";
// import rainIcon from "../assets/icons/rain-icon.svg";
// import snowIcon from "../assets/icons/snow-icon.svg";


// import "./css/weather.css";
// import { useEffect, useState } from "react";
// function Weather() {
//   const [apiData, setApiData] = useState({})
//   const [tempState, setTempState] = useState(0)
//   const [cityState, setCityState] = useState('')
//   const [countryState, setCountryState] = useState('')
//   const [latitudeState, setLatitudeState] = useState(0)
//   const [longitudeState, setLongitudeState] = useState(0)
//   const [humidityState, setHumidityState] = useState(0)
//   const [windState, setwindState] = useState(0)

//   const [weatherState, setweatherState] = useState('Clear')
//   const [searchCityState, setSearchCityState] = useState('Chennai')
//   const [apiKeyState, setApiKeyState] = useState('d461c48a80a0a5d671725a5117a7ceed')
//   const [urlState, setUrlState] = useState('https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=d461c48a80a0a5d671725a5117a7ceed')


//   useEffect(() => {
//     fetchApi()
//   }, [])

//   const getWeatherImage = (main) => {
//     switch (main) {
//       case 'Clear':
//         return sunIcon;
//       case 'Rain':
//         return rainIcon;
//       case 'Clouds':
//         return cloudIcon;
//       case 'Drizzle':
//         return drizzleIcon;
//       case 'Snow':
//         return snowIcon;
//       default:
//         return null; // default image or icon
//     }
//   };
 
//   const changeCityInApi = (e) => {
//     e.preventDefault(); // Prevent the page reload
//     setUrlState(`https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&units=metric&appid=${apiKeyState}`);
//     console.log('City searched:', searchCityState);
//   };
//   const updateCityName = (e) => {
//     const value = e.target.value;
//     setSearchCityState(value); // Update the city name in state
//     console.log(value); // Print the city name to the console
//   };
//   function fetchApi() {
//     // const apiKey = "d461c48a80a0a5d671725a5117a7ceed";
//     // const city = "Chennai";
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     fetch(urlState)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setApiData(data)
//         setTempState(data.main.temp)
//         setCityState(data.name)
//         setCountryState(data.sys.country)
//         setLatitudeState(data.coord.lat)
//         setLongitudeState(data.coord.lon)
//         setHumidityState(data.main.humidity)
//         setwindState(data.wind.speed)
//         setweatherState(data.weather[0]['main'])
//         //setweatherState('Snow')
//       })
//       .catch(error => console.error("Error fetching weather data:", error));

//   }

//   return (
//     <div className="weather-container-div">

//       <div className="search-div">
//         <span>
//           <input type="text" placeholder="Enter city name" onChange={(e)=>updateCityName(e)} />
//         </span>
//         <span className="clear-icon">
//           <img src={clearIcon} alt="Search" height="24px" width="24px" />
//         </span>
//         <span className="search-icon">
//           <a href="" onClick={()=>changeCityInApi()}><img src={searchIcon} alt="Search" height="24px" width="24px" /></a>
//         </span>
//       </div>

//       <div className="display-div">
//         <div>
//           <img src={getWeatherImage(weatherState)} alt="present weather image" />
//         </div>
//         <div>
//           <h2>{tempState}</h2>
//         </div>
//         <div>
//           <h2>{cityState}</h2>
//         </div>
//         <div style={{ margin: "0px" }}>
//           <h4>{countryState}</h4>
//         </div>
//       </div>

//       <div>
//         <table>
//           <tbody className="long-lat">
//             <tr>
//               <th>latitude</th>
//             </tr>
//             <tr>
//               <th>{latitudeState.toFixed(2)}</th>
//             </tr>
//           </tbody>
//           <tbody className="long-lat">
//             <tr>
//               <th>longitude</th>
//             </tr>
//             <tr>
//               <th>{longitudeState.toFixed(2)}</th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="bottom-div">
//         <table className="bottom">
//           <tbody>
//             <tr>
//               <td className="left-icon">
//                 <img
//                   src={humidityIcon}
//                   alt="humidity image"
//                   height="24px"
//                   width="24px"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <th>{humidityState}</th>
//             </tr>
//             <tr>
//               <th>Humidity</th>
//             </tr>

//           </tbody>
//           <tbody className="center-items">
//             <tr>
//               <th></th>
//               <td className="right-icon">
//                 <img
//                   src={windIcon}
//                   alt="wind image"
//                   height="24px"
//                   width="24px"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <th>{`${windState * 3.6} Km/hr`}</th>
//             </tr>
//             <tr>
//               <th>Wind</th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Weather;
