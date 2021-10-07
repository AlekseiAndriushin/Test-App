import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from '../../features/cards/cardsSlice';
import Button from '../Button/Button'
import './Form.scss'

const Form = () => {

	const dispatch = useDispatch();


	const [formData, setFormData] = useState({
		company: '',
		address: '',
		email: '',
		phone: ''
	})

	const { company, address, email, phone } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (event: SyntheticEvent) => {

		event.preventDefault()
		dispatch(addCard({
			id: Date.now().toString(),
			address,
			company,
			email,
			phone,
			taken: false
		}))
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				className="form__input"
				type="text"
				name="company"
				placeholder="Введите название компании"
				required
				value={formData.company}
				onChange={onChange}
			/>

			<input
				className="form__input"
				type="text"
				name="address"
				placeholder="Введите Ваш адрес"
				required
				value={formData.address}
				onChange={onChange}
			/>

			<input
				className="form__input"
				type="email"
				name="email"
				placeholder="Введите Ваш e-mail"
				required
				value={formData.email}
				onChange={onChange} />

			<input
				className="form__input"
				type="tel"
				name="phone"
				placeholder="Введите Ваш телефон"
				required
				value={formData.phone}
				onChange={onChange}
			/>

			<Button title="добавить" />
		</form>
	)
}

export default Form
