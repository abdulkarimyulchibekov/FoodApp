import React from 'react';
import { DashboardContent } from '../../components/DaashboardContent/DashboardContent';
import { DashboardHeader } from '../../components/DashboardHeader/DashboardHeader';
import { DashboardHero } from '../../components/DashboardHero/DashboardHero';
import { DashboardMain } from '../../components/DashboardMain/DashboardMain';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboard__inner'>
				<DashboardHeader />
				<DashboardHero />
				<DashboardMain />
			</div>
      <DashboardContent />
		</div>
	);
};
