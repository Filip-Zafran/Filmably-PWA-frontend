import React from 'react';
import { Check, X } from '../../icons';
import './ShotsButton.css';

export const ShotsButton = ({ like, active, inactive }) => {
  return (
    <div className={`shotsButBoarder`}>
      <div
        className={`shotsButton ${
          like ? 'shotsButtonLike' : 'shotsButtonDislike'
        }`}
      >
        {like ? <Check /> : <X />}
      </div>
    </div>
  );
};
