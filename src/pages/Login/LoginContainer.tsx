import React, { FocusEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { checkAuth } from '../../features/Slices/Auth/AuthService';

export const LoginContainer = () => {

	const dispatch = useDispatch();

	const initialState = {
		user: "",
		password: ""
	}

	const [formLogin, setFormLogin] = useState(initialState)

	const onChange = (e: FocusEvent<HTMLInputElement>) =>
		setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

	const { user, password } = formLogin;

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault()
		dispatch(checkAuth(user, password))
	}

	return (
		<LoginForm
			formLogin={formLogin}
			handleSubmit={handleSubmit}
			onChange={onChange} />
	)
}