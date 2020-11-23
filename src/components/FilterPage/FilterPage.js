import React from 'react';
import { FilterGroup } from './FilterGroup';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FilterPage.css';

export const FilterPage = ({ toggle, seeFilters, hidden }) => {
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
    <div
      className={
        hidden ? 'filterPage__hidden' : seeFilters ? 'filterPage' : 'letsStart'
      }
      onClick={seeFilters ? null : toggle}
    >
      <motion.div layout data-isopen={seeFilters} className="letsStart__border">
        <motion.div layout data-isopen={seeFilters} className="letsStart__card">
          <motion.div layout className="letsStart__title">
            Let's Start
          </motion.div>
          <motion.div layout className="letsStart__content">
            <FilterGroup name="Time" filters={timeFilters} />
            <FilterGroup name="Genre" filters={genreFilters} />
          </motion.div>
          <motion.div layout className="filterPage__buttons">
            <div onClick={toggle} className="filterPage__cancel">
              Cancel
            </div>
            <Link to="/matchPage">
              <div onClick={toggle} className="filterPage__ok">
                OK
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
