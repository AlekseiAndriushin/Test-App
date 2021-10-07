import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { fetchUser } from '../../features/Api/User/fetchUser';
import Header from './Header';
import "./Header.scss"

const HeaderContainer = () => {
	const dispatch = useDispatch()
	useEffect(() => {

		dispatch(fetchUser())

	}, [])
	const user = useSelector((state: RootState) => state.user.user)

	return (
		<Header user={user} />
	)
}

export { HeaderContainer }
