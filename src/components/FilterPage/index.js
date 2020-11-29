import React, { useState, useEffect } from 'react';
import { FilterGroup } from './FilterGroup';
import { motion } from 'framer-motion';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import './FilterPage.css';

export const FilterPage = ({ toggle, seeFilters, hidden }) => {
  const [timeFilters, setTimeFilters] = useState({});
  const [genreFilters, setGenreFilters] = useState({});

  const currentTimeFilters = [
    '2020s',
    '2010s',
    '2000s',
    '1990s',
    '1980s',
    '1970s',
  ];
  const currentGenreFilters = [
    'Western',
    'Romance',
    'Science Fiction',
    'Drama',
    'Action',
    'Comedy',
    'Horror',
  ];

  const history = useHistory();
  const location = useLocation();

  const serverURL = process.env.REACT_APP_SERVER;

  //toggles the filters from active to inactive in the state
  const toggleActive = (getter, setter) => (filter) =>
    setter({ ...getter, [filter]: !getter[filter] });

  //compares possible filters with active filters from DB to get the current state
  const mapOver = (activeFilters, possibleFilters) => {
    const addKeys = (currentFilters) => {
      for (let i = 0; i < possibleFilters.length; i++) {
        const index = activeFilters.indexOf(possibleFilters[i]);
        index > -1
          ? (currentFilters[possibleFilters[i]] = true)
          : (currentFilters[possibleFilters[i]] = false);
      }
      return currentFilters;
    };
    const result = addKeys({});
    return result;
  };

  //takes the current state and makes an array of active filters
  const reverseMapOver = (filterObject) => {
    let filterArray = [];
    for (let [key, value] of Object.entries(filterObject)) {
      if (value) filterArray.push(key);
    }
    return filterArray;
  };

  //gets the current filters and converts them into an object in the state
  const getFilters = async () => {
    try {
      const response = await axios({
        method: 'GET',
        withCredentials: true,
        url: `${serverURL}/likeTracker/filters`,
      });
      if (Object.keys(response.data.filters).length > 0) {
        const gFilters = mapOver(
          response.data.filters.genreFilters,
          currentGenreFilters
        );
        const tFilters = mapOver(
          response.data.filters.timeFilters,
          currentTimeFilters
        );
        setGenreFilters(gFilters);
        setTimeFilters(tFilters);
      } else {
        console.log('no object');
        setGenreFilters(mapOver([], currentGenreFilters));
        setTimeFilters(mapOver([], currentTimeFilters));
      }
      return response.data.filters;
    } catch (err) {
      return err;
    }
  };

  //converts state filter objects into two strings and saves them in the DB
  const clickOkay = async () => {
    try {
      const response = await axios({
        method: 'POST',
        withCredentials: true,
        url: `${serverURL}/likeTracker/filters`,
        data: {
          filters: {
            genreFilters: reverseMapOver(genreFilters),
            timeFilters: reverseMapOver(timeFilters),
          },
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
