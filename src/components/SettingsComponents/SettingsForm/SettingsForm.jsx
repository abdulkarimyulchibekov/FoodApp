import axios from 'axios';
import React from 'react';

export const SettingsForm = () => {
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const { name, price, bowls, category_id, food_img } = evt.target.elements;
		formData.append('name', name.value);
		formData.append('price', price.value);
		formData.append('bowls', bowls.value);
		formData.append('category_id', category_id.value);
		formData.append('food_img', food_img.files[0]);
		axios
			.post('https://food-service-layer-app.herokuapp.com/food', formData)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<form onSubmit={handleFormSubmit}>
			<input type='text' name='name' />
			<input type='number' name='price' />
			<input type='text' name='bowls' />
			<input type='text' name='category_id' />
			<input type='file' name='food_img' />
      <button type='submit'>add
      </button>
		</form>
	);
};
