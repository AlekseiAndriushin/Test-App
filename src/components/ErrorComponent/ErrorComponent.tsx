import React from 'react'
import { Link } from 'react-router-dom'

interface IErrorComponent {
	isAuth: boolean;
}


export const ErrorComponent: React.FC<IErrorComponent> = ({ isAuth }) => {
	return (
		<>
			{isAuth
				?
				(
					<Link to="/">
						Вернуться на страницу с карточками
					</Link>
				)
				:
				(<Link to="/login">
					Вернуться к авторизации
				</Link>
				)
			}
		</>
	)
}
