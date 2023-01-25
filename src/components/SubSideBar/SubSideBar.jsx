import React from 'react';
import { NavLink } from 'react-router-dom';
import './subsidebar.scss';

export const SubSideBar = () => {
	return (
		<ul className='subsidebar'>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={"hot-dishes"}>
					Hot Dishes
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={`cold-dishes`}>
					Cold Dishes
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={`soup`}>
					Soup
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={`grill`}>
					Grill
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={`appetizer`}>
					Appetizer
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
			<li className='subsidebar__item'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'item__active' : 'subsidebar__link'
					}
					to={`desert`}>
					Desert
				</NavLink>
				<span className='subsidebar__line'></span>
			</li>
		</ul>
	);
};
