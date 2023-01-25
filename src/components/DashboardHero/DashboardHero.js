import React from 'react';
import "./dashboardhero.scss"
import increase from "../../assets/Images/increase.svg"
import decrease from "../../assets/Images/decrease.svg"
import dollar from "../../assets/Images/dollar.svg"
import people from "../../assets/Images/people.svg"
import bookmark from "../../assets/Images/bookmark.svg"

export const DashboardHero = () => {
	return (
		<ul className='dashboard__list'>
			<li className='dashboard__item'>
				<div className='dashboard__top'>
					<img src={dollar} alt='dollar' className='dashboard__icon' />
					<span style={{color: "#50D1AA"}} className='dashboard__desc'>+32.40%</span>
					<img src={increase} alt='increase icon' className='dashboard__img' />
				</div>
        <p className="dashboard__main-text">$10,243.00</p>
        <p className="dashboard__secondary-text">Total Revenue</p>
			</li>
			<li className='dashboard__item'>
				<div className='dashboard__top'>
					<img src={bookmark} alt='bookmark icon' className='dashboard__icon' />
					<span style={{color: "#FF7CA3"}} className='dashboard__desc'>-12.40%</span>
					<img src={decrease} alt='decrease icon' className='dashboard__img' />
				</div>
        <p className="dashboard__main-text">23,456</p>
        <p className="dashboard__secondary-text">Total Dish Ordered</p>
			</li>
			<li className='dashboard__item'>
				<div className='dashboard__top'>
					<img src={people} alt='people icon' className='dashboard__icon' />
					<span style={{color: "#50D1AA"}} className='dashboard__desc'>+2.40%</span>
					<img src={increase} alt='increase icon' className='dashboard__img' />
				</div>
        <p className="dashboard__main-text">1,234</p>
        <p className="dashboard__secondary-text">Total Customer</p>
			</li>
		</ul>
	);
};
