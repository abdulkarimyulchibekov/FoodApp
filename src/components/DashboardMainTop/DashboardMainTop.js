import React from 'react';
import "./dashboardmaintop.scss"

export const DashboardMainTop = () => {
	return (
		<>
			<div className='main__header'>
				<p className='main__title'>Order Report</p>
				<select className='main__select' defaultValue={"Filter Order"}>
					<option defaultChecked disabled value='Filter Order'>
						Filter Order
					</option>
					<option value='Completed'>Completed</option>
					<option value='Preparing'>Preparing</option>
					<option value='Pending'>Pending</option>
				</select>
			</div>
      <div className="main__hero">
        <p style={{marginRight: 128}} className="main__secondary-text">Customer</p>
        <p style={{marginRight: 136}} className="main__secondary-text">Menu</p>
        <p style={{marginRight: 61}} className="main__secondary-text">Total Payment</p>
        <p style={{marginRight: 50}} className="main__secondary-text">Status</p>
      </div>
		</>
	);
};
