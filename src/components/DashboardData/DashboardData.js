import React from 'react';
import ApexChart from '../ApexChart/ApexChart';
import './DashboardData.scss';
export const DashboardData = () => {
	return (
		<div className='data'>
			<div className='data__top'>
				<p className='data__title'>Most Type of Order</p>
				<select defaultValue={'Today'} className='most-ordered__select'>
					<option value='Today' className='most-ordered__time'>
						Today
					</option>
					<option value='Weekly' className='most-ordered__time'>
						Weekly
					</option>
					<option value='Monthly' className='most-ordered__time'>
						Monthly
					</option>
				</select>
			</div>
			<div className='data__bottom'>
				<ApexChart />
				<div className='data__content'>
					<ul className='data__list'>
						<li className='data__item'>
							<span style={{backgroundColor: "#FF7CA3"}} className='data__circle'></span>
							<div className='data__text'>
								<p className='data__desc'>Dine In</p>
								<p className='data__customer'>200 customers</p>
							</div>
						</li>
						<li className='data__item'>
							<span style={{backgroundColor: "#FFB572"}}  className='data__circle'></span>
							<div className='data__text'>
								<p className='data__desc'>To Go</p>
								<p className='data__customer'>122 customers</p>
							</div>
						</li>
						<li className='data__item'>
							<span style={{backgroundColor: "#65B0F6"}}  className='data__circle'></span>
							<div className='data__text'>
								<p className='data__desc'>Delivery</p>
								<p className='data__customer'>264 customers</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
