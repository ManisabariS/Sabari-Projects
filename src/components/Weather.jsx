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
import { useNavigate } from "react-router-dom";

function Weather() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({});
  const [tempState, setTempState] = useState(0);
  const [cityState, setCityState] = useState("");
  const [countryState, setCountryState] = useState("");
  const [latitudeState, setLatitudeState] = useState(0);
  const [longitudeState, setLongitudeState] = useState(0);
  const [humidityState, setHumidityState] = useState(0);
  const [windState, setWindState] = useState(0);
  const [pressureState, setPressureState] = useState(0);
  const [weatherDescriptionState, setWeatherDescriptionState] =
    useState("Normal");
  const [localApiKeyState, setLocalApiKeyState] = useState("");
  const [showSearchBtn, setShowSearchBtn] = useState(false);
  const [showUpdateApiKeyBtn, setShowUpdateApiKeyBtn] = useState(false);
  const [showUpdateApiKeyTextBox, setShowUpdateApiKeyTextBox] = useState(false);
  const [weatherState, setWeatherState] = useState("Clear");
  const [searchCityState, setSearchCityState] = useState("Chennai");
  const [apiKeyState, setApiKeyState] = useState(
    "d461c48a80a0a5d671725a5117a7ceed"
  );
  const [urlState, setUrlState] = useState(
    "https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=d461c48a80a0a5d671725a5117a7ceed"
  );

  useEffect(() => {
    fetchApi();
  }, [urlState]);

  const getWeatherImage = (main) => {
    switch (main) {
      case "Clear":
        return sunIcon;
      case "Clouds":
      case "Haze":
      case "Mist":
      case "Fog":
        return cloudIcon;
      case "Rain":
      case "Thunderstorm":
        return rainIcon;
      case "Drizzle":
        return drizzleIcon;
      case "Snow":
      case "Sleet":
        return snowIcon;
      default:
        return sunIcon;
    }
  };

  const localUpdateApiKey = (e) => {
    let newKey = e.target.value;
    setLocalApiKeyState(newKey);
    setShowUpdateApiKeyBtn(true);
  };

  const UpdateApikey = () => {
    setApiKeyState(localApiKeyState);
  };

  const changeCityInApi = (e) => {
    e.preventDefault();
    if (searchCityState.trim() === "") {
      alert("Please enter a valid city name");
      return;
    }
    setUrlState(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&units=metric&appid=${apiKeyState}`
    );
  };
  function handlePressEnter(e) {
    if (e.key === "Enter") {
      const value = e.target.value;
      setSearchCityState(value);
      setUrlState(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&units=metric&appid=${apiKeyState}`
      );
    }
  }
  const updateCityName = (e) => {
    const value = e.target.value;
    setSearchCityState(value);
    setShowSearchBtn(value.trim() !== "");
  };

  const clearInput = () => {
    setSearchCityState("");
    setShowSearchBtn(!showSearchBtn);
  };

  function fetchApi() {
    fetch(urlState)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          alert("City not found");
          return;
        }
        setApiData(data);
        setTempState(data.main.temp);
        setCityState(data.name);
        setCountryState(data.sys.country);
        setLatitudeState(data.coord.lat);
        setLongitudeState(data.coord.lon);
        setHumidityState(data.main.humidity);
        setWindState(data.wind.speed);
        setWeatherState(data.weather[0].main);
        setWeatherDescriptionState(data.weather[0].description);
        setPressureState(data.main.pressure);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }

  return (
    <>
      <div className="center">
      <div className="back-btn-div">
            <button onClick={() => navigate("/services")}>Back</button>
          </div>
        <div className="weather-container-div">
          <div className="input-main-container">
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter city name"
                value={searchCityState}
                onChange={updateCityName}
                onKeyDown={handlePressEnter}
              />
            </div>
            <div className="clear-icon" onClick={clearInput}>
              {showSearchBtn && (
                <img src={clearIcon} alt="Clear" height="24px" width="24px" />
              )}
            </div>
            <div className="search-icon">
              <a href="" onClick={changeCityInApi}>
                {showSearchBtn && (
                  <img
                    src={searchIcon}
                    alt="Search"
                    height="24px"
                    width="24px"
                  />
                )}
              </a>
            </div>
          </div>

          <div className="display-div">
            <div>
              <img
                src={getWeatherImage(weatherState)}
                alt="present weather image"
              />
            </div>
            <div>
              <h2>
                {tempState.toFixed(1)}°C{" "}
                <span style={{ fontSize: "16px" }}>
                  - {weatherDescriptionState}
                </span>
              </h2>
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
          </div>

          <button
            onClick={() => setShowUpdateApiKeyTextBox(!showUpdateApiKeyTextBox)}
          >
            Update Api Key
          </button>

          <div className="center-horzontally">
            {showUpdateApiKeyTextBox && (
              <input
                type="text"
                className="custom-textbox"
                onChange={localUpdateApiKey}
                placeholder="Enter 32 characters..."
              />
            )}
            {showUpdateApiKeyBtn && (
              <button onClick={() => UpdateApikey()}>Update</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
