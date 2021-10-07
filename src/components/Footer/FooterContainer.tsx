import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { fetchFollowers } from '../../features/Api/followers/fetchFollowers'
import { fetchGaearon } from '../../features/Api/gaearon/fetchGaearon'
import Footer from './Footer'
import './Footer.scss'

export const FooterContainer = () => {
	const dispatch = useDispatch()
	useEffect(() => {

		dispatch(fetchFollowers())
		dispatch(fetchGaearon())

	}, [])
	const followers = useSelector((state: RootState) => state.followers.followers)

	const gaearon = useSelector((state: RootState) => state.gaearon.gaearon)

	return (
		<>
			<Footer gaearon={gaearon} followers={followers} />
		</>
	)
}

