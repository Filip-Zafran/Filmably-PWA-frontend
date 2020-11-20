import React from 'react';
import { ChevronLeft, Filter } from '../styleElements/icons';
import { TopNavText } from './TopNavText';

export const TopNav = ({ backIcon, filterIcon, text }) => {
  return (
    <div className="topNav">
      {backIcon ? <ChevronLeft className="light300" /> : null}
      {filterIcon ? (
        <Filter className="light300" />
      ) : text ? (
        <TopNavText text={text} />
      ) : null}
    </div>
  );
};
