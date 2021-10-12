import React from 'react'
import './LoginForm.scss'
export const LoginForm = () => {
	return (
		<section className="LoginForm">
			<input type="text"
				className="LoginForm__input"
				name="company"
				placeholder="Введите имя"
				required
			/>
			<input type="text"
				className="LoginForm__input"
				name="company"
				placeholder="Введите пароль"
				required
			/>
			<button>войти</button>
		</section>
	)
}
