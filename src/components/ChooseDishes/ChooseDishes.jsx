import React from 'react';
import "./choosedishes.scss"

export const ChooseDishes = () => {
	return (
		<div style={{marginBottom: 70}} className='choosedishes'>
			<p className='choosedishes__text'>Choose Dishes</p>
      <select className='choosedishes__select'>
        <option className='choosedishes__option' defaultChecked value="Dine In">Dine In</option>
        <option className='choosedishes__option' value="To Go">To Go</option>
        <option className='choosedishes__option' value="Delivery">Delivery</option>
      </select>
		</div>
	);
};
