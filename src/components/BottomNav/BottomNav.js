import React from 'react';
import { Logo, LogoActive, Heart, Star } from '../styleElements/icons';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';
import { Ripple } from './RippleButton';

export function BottomNav() {
	const location = useLocation();

	return (
		<div className='bottomNav'>
			<Link to='/dashboard/profile'>
				<Ripple classes='bottomNavButton'>
					<Star active={location.pathname === '/dashboard/profile' ? true : false} />
					<p
						className={
							location.pathname === '/dashboard/profile' ? 'bottomNav__activeLabel' : 'bottomNav__label'
						}
					>
						Profile
					</p>
				</Ripple>
			</Link>
			<Link to='/dashboard'>
				<Ripple classes='bottomNavButton'>
					{location.pathname === '/dashboard' || location.pathname === '/dashboard/matchPage' ? (
						<LogoActive />
					) : (
						<Logo />
					)}

					<p
						className={
							location.pathname === '/dashboard' || location.pathname === '/dashboard/matchPage' ? (
								'bottomNav__activeLabel'
							) : (
								'bottomNav__label'
							)
						}
					>
						Match
					</p>
				</Ripple>
			</Link>
			<Link to='/dashboard/chat'>
				<Ripple classes='bottomNavButton'>
					<Heart active={location.pathname === '/dashboard/chat' ? true : false} />
					<p
						className={
							location.pathname === '/dashboard/chat' ? 'bottomNav__activeLabel' : 'bottomNav__label'
						}
					>
						Chat
					</p>
				</Ripple>
			</Link>
		</div>
	);
}
