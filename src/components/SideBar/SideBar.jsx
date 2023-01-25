import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Data,
	Email,
	Home,
	Logout,
	Notifications,
	Product,
	Settings,
	Shop,
} from '../../assets/Images/images';
import './sidebar.scss';

export const SideBar = () => {
	return (
		<div className='sidebar'>
			<ul className='sidebar__list'>
				<li className='sidebar__item'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Shop></Shop>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/home'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Home></Home>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/product'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Product></Product>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/data'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Data></Data>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/email'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Email></Email>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/notifications'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Notifications></Notifications>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/settings'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Settings></Settings>
							</div>
						</div>
					</NavLink>
				</li>
				<li className='sidebar__item'>
					<NavLink
						to='/logout'
						className={({ isActive }) =>
							isActive ? 'active sidebar__link' : 'sidebar__link'
						}>
						<div className='sidebar__content'>
							<div className='sidebar__box'>
								<Logout></Logout>
							</div>
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
