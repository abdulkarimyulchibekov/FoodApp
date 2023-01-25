import React from 'react';
import './DashboardOrdered.scss';
import food1 from '../../assets/Images/food1.png';
import food2 from '../../assets/Images/food2.png';
import food3 from '../../assets/Images/food3.png';
export const DashboardOrdered = () => {
	return (
		<div className='most-ordered'>
			<div className='most-ordered__header'>
				<p className='most-ordered__title'>Most Ordered</p>
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
			<ul className='most-ordered__list'>
				<li className='most-ordered__item'>
					<img src={food1} alt='' className='most-ordered__img' />
					<div className='most-ordered__box'>
						<p className='most-ordered__name'>Spicy seasoned seafood noodles</p>
						<p className='most-ordered__count'>200 dishes ordered</p>
					</div>
				</li>
				<li className='most-ordered__item'>
					<img src={food2} alt='' className='most-ordered__img' />
					<div className='most-ordered__box'>
						<p className='most-ordered__name'>
							Salted pasta with mushroom sauce
						</p>
						<p className='most-ordered__count'>120 dishes ordered</p>
					</div>
				</li>
				<li className='most-ordered__item'>
					<img src={food3} alt='' className='most-ordered__img' />
					<div className='most-ordered__box'>
						<p className='most-ordered__name'>
							Beef dumpling in hot and sour soup
						</p>
						<p className='most-ordered__count'>80 dishes ordered</p>
					</div>
				</li>
			</ul>
			<button className='most-ordered__btn'>View All</button>
		</div>
	);
};
