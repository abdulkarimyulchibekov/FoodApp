import React from 'react';
import './header.scss';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__box'>
				<div className='header__content'>
					<p className='header__header'>Jaegar Resto</p>
					<p className='header__text'>Tuesday, 2 Feb 2021</p>
				</div>
				<input placeholder='Search for food, coffee, etc...' className='header__input' type='search' />
			</div>
		</header>
	);
};
