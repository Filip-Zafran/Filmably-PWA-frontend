import React from 'react';
import { FilterGroup } from './FilterGroup';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import './FilterPage.css';

export const FilterPage = () => {
  const timeFilters = ['1990s', '1980s', 'New Releases'];
  const genreFilters = [
    'Art',
    'Western',
    'Romance',
    'Science Fiction',
    'Drama',
    'Action',
    'Comedy',
    'Horror',
    'Top Rated',
  ];

  const startButton = document.getElementsByClassName('filterPage__title');
  const filterCard = document.getElementsByClassName('filterPage__card');
  function calculateCollapsedScale() {
    const collapsed = startButton.getBoundingClientRect();

    const expanded = filterCard.getBoundingClientRect();
    return {
      x: collapsed.width / expanded.width,
      y: collapsed.height / expanded.height,
    };
  }

  function ease(v, pow = 4) {
    return 1 - Math.pow(1 - v, pow);
  }

  function createKeyframeAnimation() {
    let { x, y } = calculateCollapsedScale();
    let animation = '';
    let inverseAnimation = '';

    for (let step = 0; step <= 100; step++) {
      let easedStep = ease(step / 100);

      const xScale = x + (1 - x) * easedStep;
      const yScale = y + (1 - y) * easedStep;

      animation += `${step}% {
        transform: scale(${xScale}, ${yScale})
      }`;

      const invXScale = 1 / xScale;
      const invYScale = 1 / yScale;
      inverseAnimation += `${step}% {transform: scale(${invXScale}, ${invYScale})}`;
    }
    return `@keyframes menuAnimation {${animation}} @keyframes menuContentsAnimation {${inverseAnimation}}`;
  }

  return (
    <div className="filterPage">
      <CirclesBackground />

      <div className="filterPage__border">
        <div className="filterPage__card">
          <div className="filterPage__title">Let's Start</div>
          <FilterGroup name="Time" filters={timeFilters} />
          <FilterGroup name="Genre" filters={genreFilters} />
          <div className="filterPage__buttons"></div>
        </div>
      </div>
    </div>
  );
};
