import { useLoaderData } from 'react-router-dom';
import './css/Users.css';
import UserCard from '../components/UserCard';
import { useState } from 'react';
import UserDetailsForm from '../components/UserDetailsForm';

function Users() {
  const userDetails = useLoaderData(); // Fetch user details using the loader
  const [show,setShow]=useState(false)

  const addUser = ()=>{
    setShow(true)
  }
    
  return (
    <>
      <h1>Users</h1>
      <button style={{marginBottom:'33px'}} onClick={()=>addUser()}>Add User</button>
      <div className='center-item-horizontally'>{show&& (<UserDetailsForm/>)}</div>
      <div className='users-list-container'>
        {userDetails.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default Users;
