import React, { useState } from 'react';
import './Start.css';
import { CirclesBackground } from '../../components/styleElements/CirclesBackground';
import { LetsStart } from '../../components/LetsStart';
import { movieQuotes } from './movieQuotes';
import { FilterPage } from '../FilterPage';

export const Start = () => {
  const [seeFilters, setSeeFilters] = useState(false);

  const quote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)][0];

  return (
    <div className="start">
      <div className="start__textBox">
        <div className="start__quote">"{quote}"</div>
        <div className="start__space"></div>
        <div className="start__noDisplay">"{quote}"</div>
      </div>
      <FilterPage />
      {/*<LetsStart setExpand={setSeeFilters} expand={seeFilters} />*/}
      <CirclesBackground />
    </div>
  );
};
