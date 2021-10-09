import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { fetchFollowers } from '../../features/Queries/followers/fetchFollowers'
import { fetchGaearon } from '../../features/Queries/gaearon/fetchGaearon'
import { Footer } from '../../components/Footer/Footer'

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

