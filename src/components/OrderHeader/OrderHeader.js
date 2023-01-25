import React, { useState } from 'react';
import './orderheader.scss';

export const OrderHeader = () => {
	const [state, setState] = useState(false);
	const [state1, setState1] = useState(false);
	const [state2, setState2] = useState(false);

	return (
		<div className='order__header'>
			<p className='order__title'>Orders #34562</p>
			<div className='order__top'>
				<label className='order__label'>
					<input
						type='radio'
						name={'order__type'}
						className={state ? 'checked order__input' : 'order__input'}
						onChange={() => {
							setState(true);
							setState1(false);
							setState2(false);
						}}
					/>
					<span className='order__btn'>Dine In</span>
				</label>
				<label className='order__label'>
					<input
						type='radio'
						name={'order__type'}
						className={state1 ? 'checked order__input' : 'order__input'}
						onChange={() => {
							setState1(true);
							setState(false);
							setState2(false);
						}}
					/>
					<span className='order__btn'>To Go</span>
				</label>
				<label className='order__label'>
					<input
						style={{ display: 'none' }}
						type='radio'
						name={'order__type'}
						className={state2 ? 'checked order__input' : 'order__input'}
						onChange={() => {
							setState2(true);
							setState(false);
							setState1(false);
						}}
					/>
					<span className='order__btn'>Delivery</span>
				</label>
			</div>
      <div className="order__bottom">
        <p style={{marginRight: 255}} className="order__type">Item</p>
        <p style={{marginRight: 43}} className="order__type">Qty</p>
        <p className="order__type">Price</p>
      </div>
		</div>
	);
};
