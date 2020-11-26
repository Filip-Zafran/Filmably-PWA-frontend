import React, { useState, useEffect } from 'react';
import { FilterGroup } from './FilterGroup';
import { motion } from 'framer-motion';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
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

  const history = useHistory();
  const location = useLocation();

  const serverURL = process.env.REACT_APP_SERVER;

  const toggleActive = (getter, setter) => (filter) =>
    setter({ ...getter, [filter]: !getter[filter] });

  const getFilters = async () => {
    try {
      const response = await axios({
        method: 'GET',
        withCredentials: true,
        url: `${serverURL}/likeTracker/filters`,
      });
      console.log(response.data);
      if (Object.keys(response.data.filters).length > 0) {
        setGenreFilters(response.data.filters.genreFilters);
        setTimeFilters(response.data.filters.timeFilters);
      }
      return response.data.filters;
    } catch (err) {
      return err;
    }
  };

  const clickOkay = async () => {
    try {
      const response = await axios({
        method: 'POST',
        withCredentials: true,
        url: `${serverURL}/likeTracker/filters`,
        data: {
          filters: { genreFilters: genreFilters, timeFilters: timeFilters },
        },
      });
      console.log(response.data);
      if (location.pathname === '/dashboard/matchPage') {
        toggle();
      } else {
        history.push('/dashboard/matchPage');
      }
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const clickCancel = () => {
    getFilters();
    toggle();
  };

  useEffect(() => {
    getFilters();
  }, []);

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
            <div onClick={clickOkay} className="filterPage__ok">
              OK
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
