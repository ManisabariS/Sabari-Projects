import   { useState } from "react";
import "./css/UserDetailsForm.css"; // Import custom CSS

const UserDetailsForm = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    if (keys.length === 1) {
      setUserDetails({ ...userDetails, [keys[0]]: value });
    } else if (keys.length === 2) {
      setUserDetails({
        ...userDetails,
        [keys[0]]: { ...userDetails[keys[0]], [keys[1]]: value },
      });
    } else if (keys.length === 3) {
      setUserDetails({
        ...userDetails,
        [keys[0]]: {
          ...userDetails[keys[0]],
          [keys[1]]: { ...userDetails[keys[0]][keys[1]], [keys[2]]: value },
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div className="user-card">
          <h2>{userDetails.name || "Unknown Name"}</h2>
          <p>@{userDetails.username || "Unknown Username"}</p>
          <p>Email: {userDetails.email || "No Email Provided"}</p>
          <h3>Address:</h3>
          <p>Street: {userDetails.address.street || "No Street"}</p>
          <p>Suite: {userDetails.address.suite || "No Suite"}</p>
          <p>City: {userDetails.address.city || "No City"}</p>
          <p>Zipcode: {userDetails.address.zipcode || "No Zipcode"}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input
              type="number"
              name="id"
              value={userDetails.id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              name="address.street"
              value={userDetails.address.street}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Suite:</label>
            <input
              type="text"
              name="address.suite"
              value={userDetails.address.suite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="address.city"
              value={userDetails.address.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Zipcode:</label>
            <input
              type="text"
              name="address.zipcode"
              value={userDetails.address.zipcode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Latitude:</label>
            <input
              type="text"
              name="address.geo.lat"
              value={userDetails.address.geo.lat}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Longitude:</label>
            <input
              type="text"
              name="address.geo.lng"
              value={userDetails.address.geo.lng}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default UserDetailsForm;
