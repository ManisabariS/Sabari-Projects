import clearIcon from "../assets/icons/clear-icon.svg";
import cloudIcon from "../assets/icons/cloud-icon.svg";
import drizzleIcon from "../assets/icons/drizzle-icon.svg";
import rainIcon from "../assets/icons/rain-icon.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import snowIcon from "../assets/icons/snow-icon.svg";
import windIcon from "../assets/icons/wind-icon.svg";
import humidityIcon from "../assets/icons/humidity-icon.svg";
import sunIcon from "../assets/icons/sun-icon.svg";
import "./css/weather.css";
function Weather() {
  return (
    <div className="weather-container-div">
      <div className="search-div">
        <span>
          <input type="text" placeholder="Enter city name" />
        </span>
        <span className="clear-icon">
          <img src={clearIcon} alt="Search" height="24px" width="24px" />
        </span>
        <span className="search-icon">
          <img src={searchIcon} alt="Search" height="24px" width="24px" />
        </span>
      </div>

      <div className="display-div">
        <div>
          <img src={sunIcon} alt="present weather image" />
        </div>
        <div>
          <h2>33° C</h2>
        </div>
        <div>
          <h2>SALEM</h2>
        </div>
        <div style={{ margin: "0px" }}>
          <h4>IN</h4>
        </div>
      </div>

      <div>
        <table>
          <tbody className="long-lat">
            <tr>
              <th>latitude</th>
            </tr>
            <tr>
              <th>11.65</th>
            </tr>
          </tbody>
          <tbody className="long-lat">
            <tr>
              <th>longitude</th>
            </tr>
            <tr>
              <th>78.1667</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div  className="bottom-div">
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
              <th>31%</th>
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
              <th>31%</th>
            </tr>
            <tr>
              <th>Humidity</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Weather;
