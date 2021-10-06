import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import "./Header.scss"

const Header = () => {

	const user = useSelector((state: RootState) => state.user.user)

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

export { Header }
