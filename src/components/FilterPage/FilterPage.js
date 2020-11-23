import React from 'react';
import { FilterGroup } from './FilterGroup';
import { motion } from 'framer-motion';
import './FilterPage.css';

export const FilterPage = ({ toggle, seeFilters }) => {
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
    <div className={seeFilters ? 'filterPage' : 'letsStart'} onClick={toggle}>
      <motion.div layout data-isOpen={seeFilters} className="letsStart__border">
        <motion.div layout data-isOpen={seeFilters} className="letsStart__card">
          <motion.div layout className="letsStart__title">
            Let's Start
          </motion.div>
          <motion.div
            layout
            className={seeFilters ? null : 'letsStart__content'}
          >
            <FilterGroup name="Time" filters={timeFilters} />
            <FilterGroup name="Genre" filters={genreFilters} />
            <div className="filterPage__buttons"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
