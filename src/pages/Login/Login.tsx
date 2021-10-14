import React, { FocusEvent, SyntheticEvent } from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import './Login.module.scss'

interface ILoginData {
	user: string;
	password: string;
}

interface ILogin {
	formLogin: ILoginData;
	onChange: (e: FocusEvent<HTMLInputElement>) => void;
	handleSubmit: (event: SyntheticEvent) => void;
	error: string;
	isLoading: boolean;
}

export const Login: React.FC<ILogin> = ({ error, formLogin, onChange, handleSubmit, isLoading }) => {
	return (
		<>
			<LoginForm error={error} formLogin={formLogin} onChange={onChange} handleSubmit={handleSubmit} isLoading={isLoading} />
		</>
	)
}

