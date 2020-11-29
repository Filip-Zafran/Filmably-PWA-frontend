import React, { useState } from 'react';
import './Start.css';
import { CirclesBackground } from '../../components/styleElements/CirclesBackground';
import { movieQuotes } from './movieQuotes';
import { FilterPage } from '../FilterPage';

export const Start = () => {
  const [seeFilters, setSeeFilters] = useState(false);

  const quote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)][0];

  const toggleSeeFilters = () => setSeeFilters(!seeFilters);

  return (
    <div className="start">
      <div className={seeFilters ? 'start__hide' : 'start__textBox'}>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <div className="start__quote">"{quote}"</div>
        <div className="start__space"></div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className="start__noDisplay">"{quote}"</div>
      </div>
      <FilterPage toggle={toggleSeeFilters} seeFilters={seeFilters} />
      <CirclesBackground />
    </div>
  );
};
