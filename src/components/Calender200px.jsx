import { useEffect, useState } from "react";
import "./css/Calender200px.css";

function Calender() {
  const [selected, setSelected] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    getFirstAndLastDate();
    generateCalendar();
  }, [selectedMonth, selectedYear]);

  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - 40 + i);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  function getFirstAndLastDate() {
    const firstDate = new Date(selectedYear, selectedMonth, 1);
    const lastDate = new Date(selectedYear, selectedMonth + 1, 0);
    //console.log(firstDate);
    //console.log(lastDate);
  }

  function generateCalendar() {
    const firstDate = new Date(selectedYear, selectedMonth, 1);
    const lastDate = new Date(selectedYear, selectedMonth + 1, 0);
    const totalDays = lastDate.getDate();
    const startDay = firstDate.getDay();

    const daysArray = [];
    for (let i = 0; i < startDay; i++) { 
      daysArray.push(null); 
    } 
    for (let i = 1; i <= totalDays; i++) { 
      daysArray.push(i); 
    }
    setDaysInMonth(daysArray);
  } const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const handlePreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelected(new Date(selectedYear, selectedMonth, day));
  };

  const isSelectedDate = (day) => {
    return day === selected.getDate() && selectedMonth === selected.getMonth() && selectedYear === selected.getFullYear();
  };

  const isToday = (day) => {
    return day === todayDate && selectedMonth === todayMonth && selectedYear === todayYear;
  };

  // Handle "Today" button click
  const handleToday = () => {
    setSelected(new Date()); // Set to today's date
    setSelectedMonth(todayMonth); // Set to the current month
    setSelectedYear(todayYear); // Set to the current year
  };

  return (
    <div >
      <div className="calender-container">

        <div className="heading-div">
          <h2>Calendar</h2>
        </div>

        <div className="today-btn">
          {/* Show "Today" button only when the selected month and year are different */}
          {(selectedMonth !== todayMonth || selectedYear !== todayYear) && (
            <button onClick={handleToday}>
              Today
            </button>
          )}
        </div>

        <div className="header">
          <button onClick={handlePreviousMonth}>Previous</button>

          {/* Year Selection */}
          <select name="year" id="year" value={selectedYear} onChange={handleYearChange}>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Month Selection */}
          <select name="month" id="month" value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>

          <button onClick={handleNextMonth}>Next</button>
        </div>

        <div className="days-div">
          {days.map((item, index) => (
            <div key={index}>{item.slice(0, 3)}</div>
          ))}
        </div>

        <div className="dates-div">
          {daysInMonth.map((day, index) => (
            <div key={index} className={`date-cell ${isSelectedDate(day) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`} onClick={() => day && handleDateClick(day)}
            >
              {day}
            </div>

          ))}
          {/* Today Button */}

        </div>


      </div>
    </div>
  );
}

export default Calender;