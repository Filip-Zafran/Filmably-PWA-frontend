import React, { useState, useEffect } from 'react';
import './MatchCard.css';

import { dummyData } from './dummyData';

export const MatchCard = () => {
  const [currentFilm, setCurrentFilm] = useState({
    id: 'tt0047478',
    rank: '19',
    title: 'Seven Samurai',
    fullTitle: 'Seven Samurai (1954)',
    year: '1954',
    image:
      'https://imdb-api.com/images/original/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7015_AL_.jpg',
    crew: 'Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura',
    imDbRating: '8.6',
    imDbRatingCount: '311516',
  });
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    if (filmArray.length < 5) {
      const newArray = [dummyData[0], dummyData[2]];
      setFilmArray(...filmArray, ...newArray);
    }
  }, [filmArray]);

  return (
    <div className="matchCard">
      <div
        className="matchCard__current"
        style={{ backgroundImage: `url(${currentFilm['image']})` }}
      >
        <div className="matchCard__title">{currentFilm['title']}</div>
      </div>
    </div>
  );
};
