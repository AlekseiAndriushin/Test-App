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

	console.log(AuthUserService.getAuth())

	const followers = useSelector((state: RootState) => state.followers.followers)

	const auth = useSelector((state: RootState) => state.auth.isAuth)

	const gaearon = useSelector((state: RootState) => state.gaearon.gaearon)

	return (
		<>
			<Footer gaearon={gaearon} followers={followers} />
			{console.log(auth)}
		</>
	)
}

