import React from 'react';
import { Thunder, Heart, Star } from '../styleElements/icons';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';
import { Ripple } from './RippleButton';

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/profile">
        <Ripple classes="bottomNavButton">
          <Star active={location.pathname === '/profile' ? true : false} />
          <p
            className={
              location.pathname === '/profile'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Profile
          </p>
        </Ripple>
      </Link>
      <Link to="/dashboard">
        <Ripple classes="bottomNavButton">
          <Thunder
            active={
              location.pathname === '/dashboard' ||
              location.pathname === '/matchPage'
                ? true
                : false
            }
          />
          <p
            className={
              location.pathname === '/dashboard' ||
              location.pathname === '/matchPage'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Match
          </p>
        </Ripple>
      </Link>
      <Link to="/friends">
        <Ripple classes="bottomNavButton">
          <Heart active={location.pathname === '/friends' ? true : false} />
          <p
            className={
              location.pathname === '/friends'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Chat
          </p>
        </Ripple>
      </Link>
    </div>
  );
}
