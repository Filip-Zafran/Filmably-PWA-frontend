import React, { useState } from 'react';
import { FilterGroup } from './FilterGroup';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FilterPage.css';

export const FilterPage = ({ toggle, seeFilters, hidden }) => {
  const [timeFilters, setTimeFilters] = useState({
    '1990s': false,
    '1980s': false,
    'New Releases': false,
  });
  const [genreFilters, setGenreFilters] = useState({
    Art: false,
    Western: false,
    Romance: false,
    'Science Fiction': false,
    Drama: false,
    Action: false,
    Comedy: false,
    Horror: false,
    'Top Rated': false,
  });

  const toggleActive = (getter, setter) => (filter) =>
    setter({ ...getter, [filter]: !getter[filter] });

  const clickOkay = () => {
    //save changes
    toggle();
  };

  const clickCancel = () => {
    //reinitialize default values
    toggle();
  };

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
            <FilterGroup
              clickHandler={toggleActive(timeFilters, setTimeFilters)}
              name="Time"
              filters={timeFilters}
            />
            <FilterGroup
              clickHandler={toggleActive(genreFilters, setGenreFilters)}
              name="Genre"
              filters={genreFilters}
            />
          </motion.div>
          <motion.div layout className="filterPage__buttons">
            <div onClick={clickCancel} className="filterPage__cancel">
              Cancel
            </div>
            <Link to="/matchPage">
              <div onClick={clickOkay} className="filterPage__ok">
                OK
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
