import React from 'react';

const Dashboard = ({ me={}, logout }) => {
  
  return (
    <div>
      <h2>My Profile</h2>
      <p>My Id: {me.id}</p>
      <p>Name: {me.name}</p>
      <p>Email: {me.email}</p>
      <input type="button" value="Logout" onClick={logout} />
    </div>
  );
};

export default Dashboard;