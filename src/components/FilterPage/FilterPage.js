import React from 'react';
import { FilterGroup } from './FilterGroup';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import './FilterPage.css';

export const FilterPage = () => {
  const timeFilters = ['1990s', '1980s', 'New Releases'];
  const genreFilters = [
    'Art',
    'Western',
    'Romance',
    'Science Fiction',
    'Drama',
    'Action',
    'Comedy',
    'Horror',
    'Top Rated',
  ];

  return (
    <div className="filterPage">
      <CirclesBackground />

      <div className="filterPage__border">
        <div className="filterPage__card">
          <div className="filterPage__title">Let's Start</div>
          <FilterGroup name="Time" filters={timeFilters} />
          <FilterGroup name="Genre" filters={genreFilters} />
          <div className="filterPage__buttons"></div>
        </div>
      </div>
    </div>
  );
};
