import React from 'react';
import "./orderfooter.scss"

export const OrderFooter = () => {
	return (
		<div className='footer'>
			<div className='footer__body'>
				<div className='footer__top'>
					<span className='footer__text'>Discount</span>
          <span className='footer__number'>$0</span>
				</div>
				<div className='footer__bottom'>
					<span className='footer__text'>Sub total</span>
          <span className='footer__number'> $0</span>
				</div>
			</div>
      <button className='footer__btn'>Continue to Payment</button>
		</div>
	);
};
