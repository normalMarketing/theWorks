import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const moveOn = () => {
    navigate('/change-password');
  };
  const moveOnSlowly = () => {
    setTimeout(moveOn, 1000);
  };
  return (
    <div className="main-content">
      <img
        src={logo}
        alt=""
        style={{ display: 'block', margin: '1em auto 2em auto' }}
      />
      <h1>Protect your account</h1>
      <p>
        We detected suspicious activity on your account. Was this you? If not,
        click the link below to change your password and secure your account.
      </p>

      <button id="click" onClick={moveOnSlowly}>
        {' '}
        Reset your password{' '}
      </button>
    </div>
  );
};

export default Home;
