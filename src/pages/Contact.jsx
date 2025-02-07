import { useNavigate } from "react-router-dom";
import "./css/Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="container" style={{backgroundColor: '#f4f4f4'}}>
        <h2>Please select a way to contact us</h2>
        <div className="button-group">
          <button onClick={() => navigate("info")}>Info</button>
          <button onClick={() => navigate("form")}>Form</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
