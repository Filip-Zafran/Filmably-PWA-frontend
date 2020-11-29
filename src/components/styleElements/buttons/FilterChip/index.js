/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledFilterChip = styled.div`
  white-space: nowrap;
  padding: 8px 16px;
  display: inline-block;
  border-radius: 8px;
  margin: 4px;
  cursor: pointer;
  background: ${(props) =>
    props.filters[props.filterKey] ? 'var(--dark-100)' : 'var(--prime-700)'};
  color: ${(props) =>
    props.filters[props.filterKey] ? 'var(--prime-500)' : 'var(--dark-900)'};
`;

export const FilterChip = ({ clickHandler, filters, filterKey }) => {
  return (
    <StyledFilterChip
      onClick={clickHandler}
      filterKey={filterKey}
      filters={filters}
    >
      {filterKey}
    </StyledFilterChip>
  );
};
