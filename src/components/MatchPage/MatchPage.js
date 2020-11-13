import React from 'react';
import './MatchPage.css';
import { CirclesBackground } from '../styleElements/CirclesBackground';

import { ShotsButton } from '../styleElements/buttons/ShotsButton';

export function MatchPage() {
  return (
    <div className="matchPage">
      <CirclesBackground />
      <div className="matchPage__content">
        <div className="matchPage__tile">TILE</div>
        <div className="matchPage__buttons">
          <ShotsButton />
          <ShotsButton like />
        </div>
      </div>
    </div>
  );
}
