import React from 'react';

function gearIcon() {
  return (
    <div className="profile__gear-icon">
      <img
        id="profile__gear-icon"
        src={require('../Profile/images/gear-icon-white.png')}
        alt="settings icon"
      />
    </div>
  );
}

export default gearIcon;
