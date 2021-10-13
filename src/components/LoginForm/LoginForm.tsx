import React, { FocusEvent, SyntheticEvent } from 'react'
import { Button } from '../Button/Button'
import './LoginForm.scss'

interface IFormLoginData {
	user: string;
	password: string;

}

interface IFormLogin {
	formLogin: IFormLoginData;
	onChange: (e: FocusEvent<HTMLInputElement>) => void;
	handleSubmit: (event: SyntheticEvent) => void;
}

export const LoginForm: React.FC<IFormLogin> = ({ formLogin, onChange, handleSubmit }) => {
	return (
		<form className="LoginForm" onSubmit={handleSubmit}>
			<input type="text"
				className="LoginForm__input"
				name="user"
				placeholder="Введите имя"
				required
				value={formLogin.user}
				onChange={onChange}
			/>
			<input type="password"
				className="LoginForm__input"
				name="password"
				placeholder="Введите пароль"
				required
				value={formLogin.password}
				onChange={onChange}
			/>
			<Button title="войти" />
		</form>
	)
}
