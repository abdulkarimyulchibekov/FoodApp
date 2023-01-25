import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DishesItem } from '../../components/DishesItem/DishesItem';

export const ColdDishes = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get('https://food-service-layer-app.herokuapp.com/food/2')
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	console.log(data);

	return (
		<div>
			<ul className='hotdishes__list'>
				{data.length &&
					data.map((e) => (
						<DishesItem key={e.id} obj={e} />
					))}
			</ul>
		</div>
	);
};
