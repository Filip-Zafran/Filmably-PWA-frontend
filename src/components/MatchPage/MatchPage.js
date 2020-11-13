import React, { useState } from 'react';
import './MatchPage.css';
import { CirclesBackground } from '../styleElements/CirclesBackground';

import { ShotsButton } from '../styleElements/buttons/ShotsButton';

export function MatchPage() {
  const [verdict, setVerdict] = useState('neutral');
  const likeActive = verdict === 'like' ? true : false;
  const dislikeActive = verdict === 'dislike' ? true : false;

  return (
    <div className="matchPage">
      <CirclesBackground />
      <div className="matchPage__content">
        <div className="matchPage__buttons">
          <ShotsButton
            inactive={likeActive}
            clickHandler={() => setVerdict('dislike')}
            otherHandler={() => setVerdict('neutral')}
          />
          <ShotsButton
            like
            inactive={dislikeActive}
            clickHandler={() => setVerdict('like')}
            otherHandler={() => setVerdict('neutral')}
          />
        </div>
      </div>
    </div>
  );
}
