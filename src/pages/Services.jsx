import { useState } from "react";

import Weather from "../components/Weather";


function Services() {
  const [showWeatherCmp,setShowWeatherCmp] = useState(false)
    return (
      <>
        <button onClick={()=>{setShowWeatherCmp(!showWeatherCmp)}}>Weather</button>
        {showWeatherCmp && <Weather/>}
        <div style={{ padding: "20px" }}>
        <h1>Our Services</h1>
        <ul>
          <li>
            <h2>Service A</h2>
            <p>Comprehensive support for your business needs.</p>
          </li>
          <li>
            <h2>Service B</h2>
            <p>Expert consulting services to help you succeed.</p>
          </li>
          <li>
            <h2>Service C</h2>
            <p>Affordable and reliable solutions for all.</p>
          </li>
        </ul>
        </div>
      </>
      
    );
  }
  
  export default Services;
  