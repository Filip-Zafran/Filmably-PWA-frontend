import React from 'react';
import './FilterGroup.css';

export const FilterGroup = ({ name, filters }) => {
  const options = filters.map((filter) => (
    <div className="filterGroup__option" key={filter}>
      {filter}
    </div>
  ));

  return (
    <div className="filterGroup">
      <div className="filterGroup__name">{name}</div>
      {options}
    </div>
  );
};
