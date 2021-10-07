import React from 'react'
import { User } from '../../features/types/types';
import "./Header.scss"

const Header: React.FC<{ user: User }> = ({ user }) => {

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