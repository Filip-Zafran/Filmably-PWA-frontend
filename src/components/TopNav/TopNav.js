import React from 'react';
import { ChevronLeft, Filter } from '../styleElements/icons';
import { Link, useHistory } from 'react-router-dom';
import './TopNav.css';

export const TopNav = ({
  backIcon,
  filterIcon,
  text,
  textLink,
  dark,
  displayFilters,
}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.goBack();
  };

  return (
    <div className="topNav">
      {backIcon ? (
        <div
          onClick={clickHandler}
          className="topNav__button"
          id={dark ? 'topNav__buttonDark' : null}
        >
          <ChevronLeft className="light300" />
        </div>
      ) : (
        <div classname="topNav__none"></div>
      )}
      {filterIcon ? (
        <div onClick={displayFilters} className="topNav__button">
          <Filter className="light300" />
        </div>
      ) : text ? (
        <Link to={textLink}>
          <div className="topNav__text">{text}</div>
        </Link>
      ) : (
        <div classname="topNav__none"></div>
      )}
    </div>
  );
};
