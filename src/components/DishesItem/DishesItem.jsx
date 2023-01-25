import React from 'react';
import './dishesitem.scss';

export const DishesItem = ({ obj }) => {
	return (
		<li className='hotdishes__item'>
			<img
				className='hotdishes__img'
				width={132}
				height={132}
				src={`https://food-service-layer-app.herokuapp.com/${obj.image}`}
				alt={obj.name}
			/>
			<div className='hotdishes__body'>
				<p className='hotdishes__title'>{obj.name}</p>
				<p className='hotdishes__price'>{obj.price}</p>
				<p className='hotdishes__bowls'>{obj.bowls} Bowls Aviable</p>
			</div>
		</li>
	);
};
