import PropTypes from "prop-types";
function UserCard({user}) {
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p className="username">@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Address:</p>
      <ul>
        <li>Street: {user.address.street}</li>
        <li>Suite: {user.address.suite}</li>
        <li>City: {user.address.city}</li>
        <li>Zipcode: {user.address.zipcode}</li>
      </ul>
    </div>
  );
}
UserCard.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };
export default UserCard;
