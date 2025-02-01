import { useNavigate } from "react-router-dom";
import './css/Contact.css'
function Contact() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h3>Please select a way to contact us,</h3>
        <div>
          <button onClick={()=>navigate('info')}>Info</button>
          <button onClick={()=>navigate('form')}>Form</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
