import React from 'react';
import './FilterGroup.css';

export const FilterGroup = ({ name, filters, clickHandler }) => {
  const keys = Object.keys(filters);

  const options = keys.map((key) => {
    const toggleActive = () => {
      clickHandler(key);
    };
    return (
      <div
        onClick={toggleActive}
        className={
          filters[key] ? 'filterGroup__optionActive' : 'filterGroup__option'
        }
        key={key}
      >
        {key}
      </div>
    );
  });

  return (
    <div className="filterGroup">
      <div className="filterGroup__name">{name}</div>
      {options}
    </div>
  );
};
