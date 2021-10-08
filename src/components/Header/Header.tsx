import React from 'react'
import "./Header.scss"


type User = {
	name: string | undefined;
	avatar_url: string | undefined;
	html_url: string | undefined;
	followers: number | undefined;
};

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