import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import { CirclesBackground } from '../../components/styleElements/CirclesBackground';
import { LetsStartButton } from '../../components/styleElements/buttons/LetsStartButton';

export const Start = () => {
  return (
    <div className="start">
      <Link to="/MatchPage">
        <LetsStartButton label="Let's start" />
      </Link>
      <CirclesBackground />
    </div>
  );
};
