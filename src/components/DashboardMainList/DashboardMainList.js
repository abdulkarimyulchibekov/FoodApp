import React from 'react';
import './DashboardMainList.scss';
import { DashboardMainItem } from '../DashboardMainItem/DashboardMainItem';
import Avatar1 from '../../assets/Images/Avatar1.png';
import Avatar2 from '../../assets/Images/Avatar2.png';
import Avatar3 from '../../assets/Images/Avatar3.png';
import Avatar4 from '../../assets/Images/Avatar4.png';
import Avatar5 from '../../assets/Images/Avatar5.png';
import Avatar6 from '../../assets/Images/Avatar6.png';

export const DashboardMainList = () => {
	const array = [
		{
			img: Avatar1,
			name: 'Eren Jaegar',
			menu: 'Spicy seasoned seafood noodles ',
			payment: '$125',
			statu: 'Completed',
		},
		{
			img: Avatar2,
			name: 'Rier Braunn',
			menu: 'Salted Pasta with mushroom sauce',
			payment: '$145',
			statu: 'Preparing',
		},
		{
			img: Avatar3,
			name: 'Levi Ackman',
			menu: 'Beef dumpling in hot and sour soup',
			payment: '$105',
			statu: 'Pending',
		},
		{
			img: Avatar4,
			name: 'Historia Reis',
			menu: 'Hot spicy fried rice with omelet',
			payment: '$45',
			statu: 'Completed',
		},
		{
			img: Avatar5,
			name: 'Hanjie Zoem',
			menu: 'Hot spicy fried rice with omelet',
			payment: '$245',
			statu: 'Completed',
		},
		{
			img: Avatar6,
			name: 'Armin Arlert',
			menu: 'Hot spicy fried rice with omelet',
			payment: '$435',
			statu: 'Completed',
		},
	];
	return (
		<ul className='main__list'>
			{array.map((e, index) => (
				<DashboardMainItem
					price={e.payment}
					status={e.statu}
					menu={e.menu}
					img={e.img}
					name={e.name}
					key={index}
				/>
			))}
		</ul>
	);
};
