import React from 'react'
import { User } from '../../features/types/types';
import "./Header.scss"

interface IUserProps {
	user: User
}

const Header: React.FC<IUserProps> = ({ user }) => {

	return (
		<header className="header">
			<a href={user?.html_url} target="_blank" className='header__link'>
				Github profile:{user?.name}
			</a>
			<img className='header__image' src={`${user?.avatar_url}`} />
			<span>Number of my subscribers:{user?.followers}</span>
		</header>
	)
}

export default Header;