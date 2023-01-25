import React from 'react';
import './home.scss';
import { Header } from '../../components/Header/Header';
import { SubSideBar } from '../../components/SubSideBar/SubSideBar';
import { Route, Routes } from 'react-router-dom';
import { HotDishes } from '../HotDishes/HotDishes';
import { ChooseDishes } from '../../components/ChooseDishes/ChooseDishes';
import { ColdDishes } from '../ColdDishes/ColdDishes';
import { Soup } from '../Soup/Soup';
import { Grill } from '../Grill/Grill';
import { Appetizer } from '../Appetizer/Appetizer';
import { Dessert } from '../Dessert/Dessert';
import { Order } from '../../components/Order/Order';

export const Home = () => {
	return (
		<>
			<div className='home__inner'>
				<Header />
				<SubSideBar />
				<ChooseDishes />
				<Routes>
					<Route path='hot-dishes' element={<HotDishes />} />
					<Route path='cold-dishes' element={<ColdDishes />} />
					<Route path='soup' element={<Soup />} />
					<Route path='grill' element={<Grill />} />
					<Route path='appetizer' element={<Appetizer />} />
					<Route path='desert' element={<Dessert />} />
				</Routes>
			</div>
			<Order />
		</>
	);
};
