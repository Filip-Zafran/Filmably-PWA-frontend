import React from 'react';
import { Check, X } from '../../icons';
import './ShotsButton.css';

export const ShotsButton = ({
  like,
  active,
  inactive,
  clickHandler,
  otherClickHandler,
}) => {
  return (
    <div className="shotsButton">
      <div
        /*onTouchStart={clickHandler}*/
        onMouseDown={like ? clickHandler('like') : clickHandler('dislike')}
        onMouseUp={
          like ? otherClickHandler('like') : otherClickHandler('dislike')
        }
        className={`shotsButton__boarder ${
          like && active
            ? 'shotsButBoarderLike__Active'
            : like
            ? 'shotsButBoarderLike'
            : active
            ? 'shotsButBoarderDislike__Active'
            : 'shotsButBoarderDislike'
        }`}
      ></div>
      <div
        className={`shotsButton__center ${
          like && inactive
            ? 'likeInactive'
            : inactive
            ? 'dislikeInactive'
            : like
            ? 'shotsButtonLike'
            : 'shotsButtonDislike'
        }`}
      >
        {like ? <Check /> : <X />}
      </div>
    </div>
  );
};
