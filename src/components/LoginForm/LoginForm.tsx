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
	error: string
}

export const LoginForm: React.FC<IFormLogin> = ({ error, formLogin, onChange, handleSubmit }) => {
	return (
		<div className="LoginForm">
			<form onSubmit={handleSubmit}>
				{error}
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
		</div>
	)
}
