import React, { useState } from 'react'
import Button from '../Button/Button'

const Form = () => {
	const [company, setCompany] = useState<string>("")
	const [address, setAddress] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [phone, setPhone] = useState<string>("")
	return (
		<form className="form" >
			<input
				className="form__input"
				type="text"
				name="companyName"
				placeholder="Введите название компании"
				required
				onChange={(e) => setCompany(e.target.value)}
			/>
			<input
				className="form__input"
				type="text"
				name="address"
				placeholder="Введите Ваш адрес"
				required
				onChange={(e) => setAddress(e.target.value)}
			/>

			<input
				className="form__input"
				type="email"
				name="email"
				placeholder="Введите Ваш e-mail"
				required
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="form__input"
				type="tel"
				name="telephone"
				placeholder="Введите Ваш телефон"
				required
				onChange={(e) => setPhone(e.target.value)}
			/>
			<Button title="добавить" />
		</form>
	)
}

export default Form
