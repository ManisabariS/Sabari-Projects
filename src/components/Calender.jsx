import "./css/Calender.css";

function Calender() {
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 31 }, (_, i) => currentYear - 15 + i); // Generates years from (currentYear - 15) to (currentYear + 15)

  return (
    <div className="page-center">
      <div className="calender-container">
        <div className="heading-div">
          <h2>Calendar</h2>
        </div>
        <div>
          <button>Previous</button>
          
          {/* Year Selection */}
          <select name="year" id="year">
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Month Selection */}
          <select name="month" id="month">
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Calender;
