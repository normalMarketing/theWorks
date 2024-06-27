import React, { useState } from 'react';
import show from '../assets/show.png';
import hide from '../assets/hide.png';

const HideOrShow = ({ hidePassword, setHidePassword }) => {
  const [hideShowState, setHideShowState] = useState(hide);

  const stateChange = (event) => {
    if (hidePassword) {
      setHideShowState(show);
      setHidePassword(false);
    } else {
      setHideShowState(hide);
      setHidePassword(true);
    }
  };

  return (
    <div
      onClick={stateChange}
      className="hideShowDiv"
      style={{
        width: '1.5em',
        position: 'absolute',
        top: '18px',
        left: '88%',
        cursor: 'pointer',
      }}
    >
      <img
        src={hideShowState}
        alt=""
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HideOrShow;
