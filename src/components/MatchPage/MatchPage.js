import React, { useState, useEffect } from 'react';
import './MatchPage.css';
import { MatchCard } from './MatchCard';
import { ShotsButton } from '../styleElements/buttons';

export function MatchPage() {
  //verdict indicates which button is active
  const [verdict, setVerdict] = useState('neutral');

  //decision indicates the final decision of the user
  const [decision, setDecision] = useState('neutral');

  //sets buttons from neutral to inactive based on if the opposite button is selected
  const likeActive = verdict === 'like' ? true : false;
  const dislikeActive = verdict === 'dislike' ? true : false;

  //on mouseDown sets verdict
  const clickHandler = (input) => () => setVerdict(input);

  //on mouseUp sets decision
  const otherClickHandler = (input) => () => setDecision(input);

  //the final decision is reset to neutral when a new card is displayed
  const reset = () => {
    setDecision('neutral');
    setVerdict('neutral');
  };

  //sets the verdict to 'neutral' when the click is released
  const onMouseUp = (e) => {
    setVerdict('neutral');
  };

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  //create useEffect that finds the location of the buttons on mount
  //when mouseUp or touchEnd happens over location of buttons preform setDecision

  return (
    <div className="matchPage">
      <div className="matchPage__content">
        <MatchCard reset={reset} decision={decision} />
        <div className="matchPage__buttons">
          <ShotsButton
            inactive={likeActive}
            active={dislikeActive}
            clickHandler={clickHandler}
            otherClickHandler={otherClickHandler}
          />
          <ShotsButton
            like
            active={likeActive}
            inactive={dislikeActive}
            clickHandler={clickHandler}
            otherClickHandler={otherClickHandler}
          />
        </div>
      </div>
    </div>
  );
}
