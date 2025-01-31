import { useState, useEffect } from "react";
import "./css/TimeComponent.css"; // Import CSS file

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-container">
      <span className="clock-icon">🕒</span>
      <span className="time-text">{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default TimeComponent;
