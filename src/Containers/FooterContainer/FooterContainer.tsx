import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { fetchFollowers } from '../../features/Queries/followers/fetchFollowers'
import { fetchGaearon } from '../../features/Queries/gaearon/fetchGaearon'
import { Footer } from '../../components/Footer/Footer'
import AuthUserService from '../../API/AuthUserService'

export const FooterContainer = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFollowers())
		dispatch(fetchGaearon())
	}, [])

	const { followers, isLoading } = useSelector((state: RootState) => state.followers)

	const { gaearon } = useSelector((state: RootState) => state.gaearon)

	return (
		<>
			<Footer gaearon={gaearon} followers={followers} isLoading={isLoading} />
		</>
	)
}

