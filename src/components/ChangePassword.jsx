import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { v4 } from 'uuid';
import logo from '../assets/logo.png';
import { useGlobalContext } from '../context';
import HideOrShow from './HideOrShow';

const ChangePassword = () => {
  const { passwordDetails, setPasswordDetails } = useGlobalContext();

  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPasswordDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });

    setIsActive(true);
  };

  const navigate = useNavigate();
  const user = v4();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    setTimeout(submit, 1500);
  };
  const submit = () => {
    const { currentPassword, newPassword, newPassword2, confirmationCode } =
      passwordDetails;

    if (currentPassword === '' || newPassword === '' || newPassword2 === '') {
      setErrorMessage('Please fill all fields to proceed');
      return;
    }
    if (newPassword != newPassword2) {
      setErrorMessage(
        'The confirmation password does not match the new password. Please try again.'
      );
      return;
    }
    if (newPassword.length < 8) {
      setErrorMessage('Your password must be 8 characters or more in length');
      return;
    }

    console.log('Submitted!');
    navigate('/login-verification');
  };

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className="ch-passwd main-content">
      <p style={{ fontSize: '2.1em', margin: '0 auto' }}>Confirm this is you</p>
      <h1 id="verificaton-email">Change your password</h1>
      <p>
        Your password must be at least 6 characters and should include a
        comnbination of numbers, letters and special characters (!$@%).
      </p>

      <div>
        <div className="password-input">
          <input
            id="old-passwd"
            type={hidePassword ? 'password' : 'text'}
            className="input-field"
            placeholder="Current password"
            value={passwordDetails.currentPassword}
            onChange={handleChange}
            name="currentPassword"
          />
          <HideOrShow
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
        </div>

        <div className="password-input">
          <input
            id="new-passwd"
            type={hidePassword ? 'password' : 'text'}
            className="input-field"
            placeholder="New password"
            value={passwordDetails.newPassword}
            onChange={handleChange}
            name="newPassword"
          />
          <HideOrShow
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
        </div>

        <div className="password-input">
          <input
            id="renew-passwd"
            type={hidePassword ? 'password' : 'text'}
            className="input-field"
            placeholder="Re-type new password"
            value={passwordDetails.newPassword2}
            onChange={handleChange}
            name="newPassword2"
          />
          <HideOrShow
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
        </div>

        <div style={{ marginTop: '2em' }}>
          <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>

        <div>
          <button
            id="submit-password"
            className={isActive ? 'active' : 'inactive'}
            onClick={handleSubmit}
          >
            Change password
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1em',
        }}
      >
        Log out of all devices <input type="checkbox" className="checking" />
      </div>
    </div>
  );
};

export default ChangePassword;
