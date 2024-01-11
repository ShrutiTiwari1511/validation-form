import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  // Function to check authentication status
  const checkAuthentication = () => {
    axios.get('http://localhost:3001/dashboard')
      .then(res => {
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  };

  // Call the authentication check function when the component mounts
  checkAuthentication();

  return (
    <h2>Dashboard {message}</h2>
  );
};

export default Dashboard;
