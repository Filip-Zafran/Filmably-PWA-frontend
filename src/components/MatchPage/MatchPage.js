import React, { useState } from 'react';
import './MatchPage.css';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { MatchCard } from './MatchCard';
import { ShotsButton } from '../styleElements/buttons';

export function MatchPage() {
  const [verdict, setVerdict] = useState('neutral');

  //sets buttons from neutral to inactive based on if the opposite button is selected
  const likeActive = verdict === 'like' ? true : false;
  const dislikeActive = verdict === 'dislike' ? true : false;

  //sets the verdict to 'neutral' when the click is released
  window.addEventListener('mouseup', (e) => {
    setVerdict('neutral');
  });
  //sets the verdict to 'neutral' when the touch is released
  window.addEventListener('touchend', (e) => {
    setVerdict('neutral');
  });

  return (
    <div className="matchPage">
      <CirclesBackground />
      <div className="matchPage__content">
        <MatchCard />
        <div className="matchPage__buttons">
          <ShotsButton
            inactive={likeActive}
            active={dislikeActive}
            clickHandler={() => setVerdict('dislike')}
            /*otherHandler={() => setVerdict('neutral')}*/
          />
          <ShotsButton
            like
            active={likeActive}
            inactive={dislikeActive}
            clickHandler={() => setVerdict('like')}
            /*otherHandler={() => setVerdict('neutral')}*/
          />
        </div>
      </div>
    </div>
  );
}
