import React from 'react';

import { ShotsButton } from '../styleElements/buttons/ShotsButton';

export default function MatchPage() {
  return (
    <div className="matchPage">
      <ShotsButton />
      <ShotsButton like />
    </div>
  );
}
