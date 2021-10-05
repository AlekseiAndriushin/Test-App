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
				<h5>{gaearon?.name}</h5>
				<h5>{gaearon?.company}</h5>
				<img src={`${gaearon?.avatar_url}`} alt={`${gaearon?.name}`} className="footer__gaearon__image" />
				<ul className="followersWrapper">
					{followers.map((follower) => {
						return (
							<li className="followersItem" key={follower.login}>
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
