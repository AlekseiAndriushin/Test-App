import React, { FocusEvent, SyntheticEvent } from 'react'
import { Button } from '../Button'
import './Form.scss'

interface IFormData {
	company: string;
	address: string;
	email: string;
	phone: string;
}
interface IForm {
	formData: IFormData;
	onChange: (e: FocusEvent<HTMLInputElement>) => void;
	handleSubmit: (event: SyntheticEvent) => void;
}

export const Form: React.FC<IForm> = ({ formData, onChange, handleSubmit }) => {

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

			<Button title="добавить" disabled={!formData} />
		</form>
	)
}

