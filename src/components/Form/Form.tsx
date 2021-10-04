import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCard } from '../../features/cards/cardsSlice';
import Button from '../Button/Button'

const Form = () => {
	const dispatch = useDispatch();
	const [company, setCompany] = useState<string>("")
	const [address, setAddress] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phone, setPhone] = useState<string>("")

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault()
		setCompany("")
		setAddress("")
		setEmail("")
		setPhone("")
		dispatch(addCard({
			id: Date.now().toString(),
			address,
			company,
			email,
			phone
		}))
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				className="form__input"
				type="text"
				name="companyName"
				placeholder="Введите название компании"
				required
				value={company}
				onChange={(e) => setCompany(e.target.value)}
			/>
			<input
				className="form__input"
				type="text"
				name="address"
				placeholder="Введите Ваш адрес"
				required
				value={address}
				onChange={(e) => setAddress(e.target.value)}
			/>

			<input
				className="form__input"
				type="email"
				name="email"
				placeholder="Введите Ваш e-mail"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="form__input"
				type="tel"
				name="telephone"
				placeholder="Введите Ваш телефон"
				required
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<Button title="добавить" />
		</form>
	)
}

export default Form
