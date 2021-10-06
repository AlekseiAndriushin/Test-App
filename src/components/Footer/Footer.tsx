import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import './Footer.scss'

const Footer = () => {
	const followers = useSelector((state: RootState) => state.followers.followers)
	const gaearon = useSelector((state: RootState) => state.gaearon.gaearon)
	return (
		<>
			<footer className="footer" >
				<h5 className='footer__name'>{gaearon?.name}</h5>
				<h5 className="footer__company">{gaearon?.company}</h5>
				<img src={`${gaearon?.avatar_url}`} alt={`${gaearon?.name}`} className="footer__gaearon__image" />
				<ul className="footer__followers__wrapper">
					{followers.map((follower) => {
						return (
							<li className="footer__followers__item" key={follower.login}>
								{follower.login} <img src={`${follower.avatar_url}`} alt={follower.login} className="footer__image" />
							</li>
						)
					})}
				</ul>
			</footer>
		</>
	)
}

export default Footer
