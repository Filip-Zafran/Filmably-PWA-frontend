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

  const clickHandler = (input) => () => setVerdict(input);

  //the final decision is reset to neutral when a new card is displayed
  /*const reset = () => {
    setDecision('neutral');
    setVerdict('neutral');
  };*/

  //sets the verdict to 'neutral' when the click is released
  useEffect(() => {
    window.addEventListener('mouseup', () => {
      if (decision !== verdict) {
        setDecision(verdict);
      }
    });
    return () => {
      window.removeEventListener('mouseup', () => {
        if (decision !== verdict) {
          setDecision(verdict);
        }
      });
    };
  }, [verdict, decision]);

  /*useEffect(() => {
    //sets the verdict to 'neutral' when the touch is released
    window.addEventListener('touchend', (e) => {
      if (decision !== verdict) setDecision(verdict);
    });

    //cleanup event listener
    return () => {
      window.removeEventListener('touchend', (e) => {
        if (decision !== verdict) setDecision(verdict);
      });
    };
  }, [verdict, decision]);*/

  useEffect(() => {
    console.log('decision: ' + decision);
  }, [decision]);

  useEffect(() => {
    console.log('verdict: ' + verdict);
  }, [verdict]);

  return (
    <div className="matchPage">
      <div className="matchPage__content">
        <MatchCard />
        <div className="matchPage__buttons">
          <ShotsButton
            inactive={likeActive}
            active={dislikeActive}
            clickHandler={clickHandler}
          />
          <ShotsButton
            like
            active={likeActive}
            inactive={dislikeActive}
            clickHandler={clickHandler}
          />
        </div>
      </div>
    </div>
  );
}
