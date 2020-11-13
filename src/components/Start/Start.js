import React from 'react';
import './Start.css';
import { CirclesBackground } from '../../components/styleElements/CirclesBackground';
import { LetsStartButton } from '../../components/styleElements/buttons/LetsStartButton';

export const Start = () => {
  return (
    <div className="start">
      <LetsStartButton label="Let's start" />
      <CirclesBackground />
    </div>
  );
};
