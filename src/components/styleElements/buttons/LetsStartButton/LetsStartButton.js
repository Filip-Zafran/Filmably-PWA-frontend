import React from 'react';
import './LetsStartButton.css';

export const LetsStartButton = ({ label }) => {
  return (
    <div className="letsStartButton">
      <div className="letsStartButton__internal">{label}</div>
    </div>
  );
};
