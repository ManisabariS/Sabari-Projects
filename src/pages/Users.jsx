import { useLoaderData } from "react-router-dom";
import "./css/Users.css";
import UserCard from "../components/UserCard";
import { useState } from "react";
import UserDetailsForm from "../components/UserDetailsForm";

function Users() {
  const userDetails = useLoaderData(); // Fetch user details using the loader
  const [show, setShow] = useState(false);

  return (
    <div className="users-container">
      <h1 className="users-title">Users</h1>
      <div className="btn-center">
        <button className="add-user-btn" onClick={() => setShow(true)}>
          Add User
        </button>
      </div>
      {show && (
        <div className="center-item">
          <UserDetailsForm />
        </div>
      )}
      <div className="users-list-container">
        {userDetails.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
