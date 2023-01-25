import React from 'react';
import './DashbaordMainItem.scss';

export const DashboardMainItem = ({ img, name, menu, price, status }) => {
	return (
		<li className='main__item'>
			<div className='main__first-box'>
				<img src={img} alt='' className='main__user-img' />
				<p className='main__user-name'>{name}</p>
			</div>
			<p className='main__main-text'>{menu}</p>
			<p className='main__price'>{price}</p>
			<button className={status}>{status}</button>
		</li>
	);
};
