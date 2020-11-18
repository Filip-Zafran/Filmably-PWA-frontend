import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import { CirclesBackground } from '../../components/styleElements/CirclesBackground';
import { LetsStartButton } from '../../components/styleElements/buttons/LetsStartButton';
import { movieQuotes } from './movieQuotes';

export const Start = () => {
  const quote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)][0];

  return (
    <div className="start">
      <div className="start__textBox">
        <div className="start__quote">"{quote}"</div>
        <div className="start__space"></div>
        <div className="start__noDisplay">"{quote}"</div>
      </div>
      <Link to="/MatchPage">
        <LetsStartButton label="Let's start" />
      </Link>
      <CirclesBackground />
    </div>
  );
};
