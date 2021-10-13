import React, { FocusEvent, SyntheticEvent } from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'

interface ILoginData {
	user: string;
	password: string;
}

interface ILogin {
	formLogin: ILoginData;
	onChange: (e: FocusEvent<HTMLInputElement>) => void;
	handleSubmit: (event: SyntheticEvent) => void;
}

export const Login: React.FC<ILogin> = ({ formLogin, onChange, handleSubmit }) => {
	return (
		<>
			<LoginForm formLogin={formLogin} onChange={onChange} handleSubmit={handleSubmit} />
		</>
	)
}

