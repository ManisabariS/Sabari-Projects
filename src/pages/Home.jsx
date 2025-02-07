import { useNavigate } from "react-router-dom";
import TimeComponent from "../components/TimeComponent";
import "./css/Home.css"; // Importing the custom CSS


function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="time-component">
        <TimeComponent />
      </div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to DevLogics</h1>
          <p className="home-description">
            Discover a world of amazing products, services, and more. We are
            here to make your life easier with the best solutions tailored just
            for you.
          </p>
          <button className="home-button" onClick={() => navigate("/services")}>Explore Now</button>
        </div>
      </div>
      <div className="faq-div">
        <button onClick={() => navigate("/faq")}>FAQ</button>
      </div>
    </>
  );
}

export default Home;
