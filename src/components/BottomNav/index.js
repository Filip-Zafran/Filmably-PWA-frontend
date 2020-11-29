import React from 'react';
import { Logo, LogoActive, Heart, Star } from '../styleElements/icons';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';
import RippleButton from '../styleElements/buttons/RippleButton';

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottomNav">
      <Link to="/dashboard/profile">
        <RippleButton>
          <Star
            active={location.pathname === '/dashboard/profile' ? true : false}
          />
          <p
            className={
              location.pathname === '/dashboard/profile'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Profile
          </p>
        </RippleButton>
      </Link>
      <Link to="/dashboard">
        <RippleButton>
          {location.pathname === '/dashboard' ||
          location.pathname === '/dashboard/matchPage' ? (
            <LogoActive />
          ) : (
            <Logo />
          )}

          <p
            className={
              location.pathname === '/dashboard' ||
              location.pathname === '/dashboard/matchPage'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Match
          </p>
        </RippleButton>
      </Link>
      <Link to="/dashboard/chat">
        <RippleButton>
          <Heart
            active={location.pathname === '/dashboard/chat' ? true : false}
          />
          <p
            className={
              location.pathname === '/dashboard/chat'
                ? 'bottomNav__activeLabel'
                : 'bottomNav__label'
            }
          >
            Chat
          </p>
        </RippleButton>
      </Link>
    </div>
  );
}
